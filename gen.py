import yaml
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
template_dir = current_dir + '/template'


with open(template_dir + '/contents.yml') as f:
    contents = yaml.load(f, Loader=yaml.SafeLoader)

tag_template = '<a class="ui tag label">{}</a>'
link_template = '<p class="large"><a href="{}">{}</a></p>'
image_template = '<div class="column">' \
                 '<img class="ui image centered lazy" data-original="{}" alt="{}" />' \
                 '</div>'
movie_template = '<iframe width="720" height="480" src="" data-src="{}" alt="{}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

with open(template_dir + '/template_modal.txt') as f:
   body_template= f.read()

with open(template_dir + '/template_top.txt') as f:
   top_template= f.read()

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
            link += link_template.format(list(i.values())[0], list(i.keys())[0])
    image = ""
    if 'image' in content:
        for i in content['image']:
            image += image_template.format(list(i.values())[0], list(i.keys())[0])
    movie = ""
    if 'movie' in content:
        for i in content['movie']:
            movie += movie_template.format(list(i.values())[0], list(i.keys())[0])

    top_image = content['top_image']
    modal_body += body_template.format(title=title, define=define, tag=tag, prize=prize, description=description, link=link, image=image, movie=movie)
    top += top_template.format(top_image=top_image, define=define, title=title)

with open(template_dir + '/index_template.html') as f:
   html= f.read()

html_body = html.format(modal_body=modal_body, top=top)

with open('index.html', mode='w') as f:
   f.write(html_body)