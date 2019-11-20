function sizeHr(pixels) {
    document.getElementById("hrLine").size = pixels
}

function sideHr(side) {
    document.getElementById("hrLine").align = side
}

function info(obj) {
    var result = "";

    var inputElements = [obj.sex, obj.age, obj.status];
    var inputs = 0
    inputElements.forEach((type) => {
        for (var i = 0; type[i]; ++i) {
            if (type[i].checked) {
                inputs++
                result += type[i].name + ": " + type[i].value + ", \n";
                break;
            }
        }
    })
    if(inputs < 3) result = "Please enter your information"
    alert(result);
}

function test() {
    alert("123")
}