function numword(obj) {
    var s = obj.textin.value;
    var res = 0;
    var flag1 = false;

    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) != " ") {
            flag1 = true;
        }
        if ((s.charAt(i) == " " && flag1 == true) || (i == s.length - 1 && flag1 == true)) {
            res++;
            flag1 = false;
        }
    }

    obj.result.value = res;
}

function replace(obj) {
    var st = '';
    var mas = obj.text1.value.split(' ');
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] == obj.data1.value) {
            st += obj.data2.value;
            st += " ";
        } else {
            st += mas[i];
            st += " ";
        }
    }
    obj.text2.value = st;
}

function spaces(obj) {
    var s = obj.text3.value;
    var res = '';
    var flag1 = false;

    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) != " ") {
            flag1 = true;
            res += s.charAt(i);
        }
        if ((s.charAt(i) == " " && flag1 == true) || (i == s.length - 1 && flag1 == true)) {
            flag1 = false;
            res += " ";
        }
    }

    obj.text4.value = res;
}