function OnButtonClick(x) {
    $('.lazy').lazyload();
    $('.ui.modal.'+x).modal('show');
}
// function youtube_defer() {
//     var iframes = document.querySelectorAll('.youtube');
//     iframes.forEach(function(iframe){
//     if(iframe.getAttribute('data-src')) {
//         iframe.setAttribute('src',iframe.getAttribute('data-src'));
//     }
//     });
// }
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


// window.addEventListener('load', youtube_defer);