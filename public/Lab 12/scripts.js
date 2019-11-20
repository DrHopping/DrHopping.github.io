function banned(s) {
    var flag = false;
    var bannedSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "|", "/", "]", "}", "[", "{"];
    var array = s.split("");
    for (var i = 0; i < array.length; i++) {
        if (bannedSymbols.indexOf(array[i]) != -1) {
            flag = true;
            break;
        }
    }
    return flag;
}

function notNum(symbols) {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var array = symbols.split("")
    for (var i = 0; i < array.length; i++)
        if (numbers.indexOf(array[i]) == -1)
            return true
}

function testName(name) {
    if (name == "")
        alert("No input!");
    else if (banned(name) == true)
        alert("Number consist!");
    else {
        alert("Name is correct!");
    }
}

function testEmail(email) {
    var array = email.split("")
    if (array.indexOf("@") < 1 || array.indexOf(".") == -1 || array.indexOf(".") - array.indexOf("@") < 2 || array.indexOf(".") == array.length - 1)
        alert("Email is incorrect!")
    else
        alert("Email is correct")
}

function testPhone(phone) {
    if (phone == "") {
        alert("No input!");
    } else if (phone.split("")[0] == "+") {
        alert("Please remove '+'")
    } else if (notNum(phone) == true) {
        alert("Phone consist not a numbers!");
    } else if (phone.split("").length < 10) {
        alert("Phone number is too short!");
    } else if (phone.split("").length > 13) {
        alert("Phone number is too long!");
    } else {
        alert("Phone numbe is correct");
    }
}