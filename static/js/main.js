function OnButtonClick(x) {
    // $('.lazy').lazyload();
    $('.ui.modal.'+x).modal('show');
}
function youtube_init() {
    let movies = document.getElementsByClassName('movie');
    for (let i=0; i<movies.length; i++) {
    if(movies[i].firstElementChild.getAttribute('data-src')) {
        let iframe = movies[i].firstElementChild;
        let url = iframe.getAttribute('data-src');
        let id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
        console.log(id)
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
            console.log(parent)
            parent.insertBefore(movie, this);
            this.remove();
        }
        img.src = 'http://i.ytimg.com/vi/'+id+'/maxresdefault.jpg';
        console.log(img.src)
        movies[i].insertBefore(img, iframe);
        iframe.remove();
    }}
}

function iamgeClick(id) {
    console.log(id)
//     img.remove;
//     let movie = document.createElement('iframe');
//     movie.src = 'https://www.youtube.com/embed/'+id
//     movie.frameBorder = 0
//  //    movie.allow = 'accelerometer'
//     movie.autoplay = '1'
//     movies[i].insertBefore(movie, iframe);
 //    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
 };
window.onload = function() {
    youtube_init()
    // document.getElementsByClassName('image').height ='200px';
}
