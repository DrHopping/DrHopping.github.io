function MaxNumber (obj) {
	var numbers = [Number(obj.num1.value), Number(obj.num2.value), Number(obj.num3.value), Number(obj.num4.value), Number(obj.num5.value)]
	var max = Math.max(Number(obj.num1.value), Number(obj.num2.value), Number(obj.num3.value), Number(obj.num4.value), Number(obj.num5.value))
	obj.maxnum.value = max
	var quant = 0

	for (let i = 0; i < 5; i++) {
		if (numbers[i] == max) { quant++ }
	}

	obj.quant.value = quant
}

function Existing (obj) {
	var a = Number(obj.side1.value)
	var b = Number(obj.side2.value)
	var c = Number(obj.side3.value)
	if ((a + b) > c && (c + b) > a && (a + c) > b) { obj.exist.value = 'Yes' } else { obj.exist.value = 'No' }
}

function WhichQuarter (obj) {
	var x = obj.x.value
	var y = obj.y.value
	var quarter = 0
	if (x > 0 && y > 0) quarter = 1
	if (x > 0 && y < 0) quarter = 2
	if (x < 0 && y < 0) quarter = 3
	if (x < 0 && y > 0) quarter = 1
	obj.quarter.value = quarter
}
function test () {
	document.write(123)
}
