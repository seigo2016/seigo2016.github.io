function OnButtonClick(x) {
    $('.lazy').lazyload();
    $('.ui.modal.'+x).modal('show');
}
$('.ui.embed').embed();
function youtube_defer() {
    var iframes = document.querySelectorAll('.youtube');
    iframes.forEach(function(iframe){
    if(iframe.getAttribute('data-src')) {
        iframe.setAttribute('src',iframe.getAttribute('data-src'));
    }
    });
}
window.addEventListener('load', youtube_defer);