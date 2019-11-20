function bSelectColor(radio, color) {
    if (radio.checked) {
        document.getElementById("table1").style.backgroundColor = color
        document.getElementById("table1").style.backgroundImage = null
    }
}

function bSelectImage(radio, image) {
    var path = "url(" + "images/background" + image + ".jpg)"
    if (radio.checked)
        document.getElementById("table1").style.backgroundImage = path
}

function cSelectColor(radio, color, cell) {
    if (radio.checked) {
        document.getElementById("c" + cell).style.backgroundColor = color
        document.getElementById("c" + cell).style.backgroundImage = null
    }
}

function cSelectImage(radio, image, cell) {
    var path = "url(" + "images/p" + image + ".gif)"
    if (radio.checked) {
        document.getElementById("c" + cell).style.backgroundImage = path
        document.getElementById("c" + cell).style.backgroundColor = ""
    }
}

var s = "";
var sum = 0;

function usd(obj, m) {
    var r = (25 * m) + 25;
    s += ((obj.elements[0])[m]).text + " " + r + "$" + "\r\n";
    obj.restext.value = s;
    sum += r;
    obj.res.value = r;
}