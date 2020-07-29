import yaml
import os
from jinja2 import Template


# テンプレート,コンテンツディレクトリ
current_dir = os.path.dirname(os.path.abspath(__file__))
template_dir = current_dir + '/template/'
contents_dir = current_dir + '/contents/'

# 画像パス
contents_image_dir = 'static/contents_images/'


def open_template(file_name: str) -> str:
    """
        HTML/TXTファイルを読み込む

        Parameters
        ----------
        file_name : str
            ファイルのパス(template_dirからの相対パス)

        Returns
        result : str
            読み込んだテキスト
    """
    with open(template_dir + file_name) as f:
        result = f.read()
    return result


def open_contents(file_name: str) -> str:
    """
        YAMLファイルを読み込む

        Parameters
        ----------
        file_name : str
            ファイルのパス contents_dirからの相対パス

        Returns
        result : str
            読み込んだテキスト
    """
    with open(contents_dir + file_name) as f:
        result = yaml.load(f, Loader=yaml.SafeLoader)
    return result


def generate_html(html: str, data: dict) -> str:
    """
        データとHTMLテンプレートからHTMLを生成
    """
    html = Template(html)
    result = html.render(data)
    return result


def generate_skill(html: str, contents_type: int) -> list:
    """
        skillテンプレートとyamlから生成する
    """
    contents = open_contents(html)
    result = []
    if contents_type == 0:
        for row in contents:
            language = row["language"]
            term = row["term"]
            description = row["description"]
            related_skill = row["related_skill"]
            result.append([language, term, description, related_skill])
    elif contents_type == 1:
        for row in contents:
            language = row["hardware"]
            term = row["term"]
            description = row["description"]
            related_skill = row["related_skill"]
            result.append([language, term, description, related_skill])
    return result


# テンプレート 直書き
tag_template = '<a class="ui tag label">{}</a>'
link_template = '<p class="large"><a href="{}">{}</a></p>'
image_template = '<div class="column">' \
                 '<img class="ui image centered lazy-load" data-src="{}" alt="{}" />' \
                 '</div>'
movie_template = '<div class="movie"> <iframe width="720" height="480" src="" data-src="{}" alt="{}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'


# モーダルインデックステンプレート
modal_body_template = open_template('template_modal.html')
# モーダル中身テンプレート
modal_top_template = open_template('template_top.html')
# コンテンツyaml
contents = open_contents("contents.yaml")

modal_body = ""
top = ""

for content in contents:
    title = content['title']
    define = content['define']
    tag = ""
    for i in content['tag']:
        tag += tag_template.format(i)
    if 'prize' in content:
        prize = content['prize']
    else:
        prize = ""
    description = content['description']
    link = ""
    if 'link' in content:
        for i in content['link']:
            link += link_template.format(list(i.values())
                                         [0], list(i.keys())[0])
    image = ""
    if 'image' in content:
        for i in content['image']:
            image += image_template.format(contents_image_dir +
                                           list(i.values())[0], list(i.keys())[0])
    movie = ""
    if 'movie' in content:
        for i in content['movie']:
            movie += movie_template.format(list(i.values())
                                           [0], list(i.keys())[0])

    top_image = content['top_image']
    top_image = contents_image_dir + top_image
    modal_body += modal_body_template.format(
        title=title,
        define=define,
        tag=tag,
        prize=prize,
        description=description,
        link=link,
        image=image,
        movie=movie)
    top += modal_top_template.format(top_image=top_image,
                                     define=define, title=title)


skill_html = open_template("skill.html")
software_skill = generate_skill("software_skill.yaml", 0)
hardware_skill = generate_skill("hardware_skill.yaml", 1)
data = {'software_skill': software_skill,
        'hardware_skill': hardware_skill
        }
skill_body = generate_html(skill_html, data)


body_html = open_template("/body.html")
header_html = open_template("/header.html")
footer_html = open_template("/footer.html")
data = {
    'modal_body': modal_body,
    'top': top,
    'header_html': header_html,
    'footer_html': footer_html,
    'skill_html': skill_body
}
html_body = generate_html(body_html, data)

with open('index.html', mode='w') as f:
    f.write(html_body)
