function openModal(x) {
    let modal = document.getElementById(x);
    modal.classList.toggle('is-show');
}

function closeModal(x) {
    let modal = document.getElementById(x);
    modal.classList.toggle('is-show');
}
    
function youtube_init() {
    let movies = document.getElementsByClassName('movie');
    for (let i=0; i<movies.length; i++) {
    if(movies[i].firstElementChild.getAttribute('data-src')) {
        let iframe = movies[i].firstElementChild;
        let url = iframe.getAttribute('data-src');
        let id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
        let text = document.createElement('p');
        text.textContent = "↓画像をクリックして動画を再生";
        movies[i].insertBefore(text, iframe)
        let img = document.createElement('img');
        img.width = 720;
        img.onclick = function(){
            parent = this.parentNode;
            let movie = document.createElement('iframe');
            movie.src = 'https://www.youtube.com/embed/'+id
            movie.frameBorder = 0
            movie.autoplay = '1'
            movie.width = 720;
            movie.height = 480;
            parent.insertBefore(movie, this);
            this.remove();
        }
        img.src = 'https://i.ytimg.com/vi/'+id+'/maxresdefault.jpg';
        movies[i].insertBefore(img, iframe);
        iframe.remove();
    }}
}

window.onload = function() {
    youtube_init()
}
