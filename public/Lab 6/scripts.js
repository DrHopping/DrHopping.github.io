function price (argument) {
	var sum = 0

	if (document.form1.elements[3].checked) {
		sum += Number(document.form1.elements[3].value)
	} else if (document.form1.elements[4].checked) {
		sum += Number(document.form1.elements[4].value)
	} else if (document.form1.elements[5].checked) {
		sum += Number(document.form1.elements[5].value)
	} else {
		alert('Choose course duration')
		return
	}
	if (document.form1.elements[6].checked) {
		sum += Number(document.form1.elements[6].value)
	} else if (document.form1.elements[7].checked) {
		sum += Number(document.form1.elements[7].value)
	} else if (document.form1.elements[8].checked) {
		sum += Number(document.form1.elements[8].value)
	} else {
		alert('Choose a course language')
		return
	}
	if (document.form1.elements[9].checked) {
		sum += Number(document.form1.elements[9].value)
	} else if (document.form1.elements[10].checked) {
		sum += Number(document.form1.elements[10].value)
	} else if (document.form1.elements[11].checked) {
		sum += Number(document.form1.elements[11].value)
	} else {
		alert('Select the reporting form')
		return
	}

	j = ''
	p = ''
	g = ''

	if (document.form1.elements[0].checked) {
		var j = sum
		j += Number(document.form1.elements[0].value)
		j = 'The cost of the Java course :' + j
	}
	if (document.form1.elements[1].checked) {
		var p = sum
		p += Number(document.form1.elements[1].value)
		p = 'The cost of the Python course :' + p
	}
	if (document.form1.elements[2].checked) {
		var g = sum
		g += Number(document.form1.elements[2].value)
		g = 'The cost of the C# course :' + g
	}
	document.form1.res.value = j + ' ' + p + ' ' + g
}
