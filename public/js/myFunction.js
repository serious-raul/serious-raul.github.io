// The read more function (symbol, text, button)

function showMore(rets, more, button) {

    var dots = document.getElementById(rets);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(button);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Mais";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Menos";
        moreText.style.display = "inline";
    }
}


function showMoreList(rets, more, button) {

    var dots = document.getElementById(rets);
    var btnText = document.getElementById(button);
    var moreText = document.getElementById(more);

    if (dots.style.display === "contents") {
        dots.style.display = "inline";
        btnText.innerHTML = "▼";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "contents";
        btnText.innerHTML = "▲";
        moreText.style.display = "block";
    }

    window.scrollBy(0, 150)

}