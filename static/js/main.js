function OnButtonClick(x) {
    // $('.lazy').lazyload();
    $('.ui.modal.'+x).modal('show');
}
function youtube_init() {
    let vidDefer = document.getElementsByTagName('iframe');
    for (let i=0; i<vidDefer.length; i++) {
    if(vidDefer[i].getAttribute('data-src')) {
    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
    } }
}


window.onload = function() {
    youtube_init()
    // document.getElementsByClassName('image').height ='200px';
}
