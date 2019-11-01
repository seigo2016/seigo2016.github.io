function openFolder(title) {
    $("#overlay").fadeIn();
}
function closeFolder() {
    $("#overlay").fadeOut();
}

function time() {
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleString();
}