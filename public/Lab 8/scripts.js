function div(obj) {
    var st = " ";
    var x = Number(obj.variable.value);
    for (var i = 0; i <= x; i++) {
        if (x % i == 0) {
            st += String(i);
            st += ' ';
        }
    }
    obj.z.value = st;
}

function ticket(obj) {
    obj.p.value = 0;
    for (var i = 0; i <= 9; i++) {
        for (var j = 0; j <= 9; j++) {
            for (var k = 0; k <= 9; k++) {
                for (var l = 0; l <= 9; l++) {
                    for (var m = 0; m <= 9; m++) {
                        for (var n = 0; n <= 9; n++) {
                            if ((i + j + k) == (l + m + n)) {
                                obj.p.value++;
                            }
                        }
                    }
                }
            }
        }
    }
}

function rotate(obj) {
    obj.t2.value = String(obj.t1.value).split("").reverse().join("");
}