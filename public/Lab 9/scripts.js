var colors = ['Green', 'Red', 'Yellow', 'White', 'Black']
var creatures = ['Rat', 'Cow', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkeys', 'Chicken', 'Dog', 'Pig']

Date.prototype.getWeek = function () {
	var onejan = new Date(this.getFullYear(), 0, 1)
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7)
}

function calculate1 (el) {
	var str = el.data29.value
	var inyear = parseInt(str[0] + str[1] + str[2] + str[3])
	var inmont = parseInt(str[5] + str[6])
	var inday = parseInt(str[8] + str[9])
	var newdate = new Date(inyear, inmont, inday)
	var zerodate = new Date(inyear, 1, 1)
	var deltasecond = newdate - zerodate
	el.outdata29.value = Math.floor(((deltasecond / (1000 * 3600 * 24)) + 1) / 7)
}

function signs (form) {
	var str = form.dt.value
	var start = 1901; var birthyear = parseInt(str[0] + str[1] + str[2] + str[3]); var date = parseInt(str[8] + str[9]); var month = parseInt(str[5] + str[6])
	var zodiac
	if (month == 1 && date >= 20 || month == 2 && date <= 18) { zodiac = 'Aquarius' }
	if (month == 2 && date >= 19 || month == 3 && date <= 20) { zodiac = 'Pisces' }
	if (month == 3 && date >= 21 || month == 4 && date <= 19) { zodiac = 'Aries' }
	if (month == 4 && date >= 20 || month == 5 && date <= 20) { zodiac = 'Taurus' }
	if (month == 5 && date >= 21 || month == 6 && date <= 21) { zodiac = 'Gemini' }
	if (month == 6 && date >= 22 || month == 7 && date <= 22) { zodiac = 'Cancer' }
	if (month == 7 && date >= 23 || month == 8 && date <= 22) { zodiac = 'Leo' }
	if (month == 8 && date >= 23 || month == 9 && date <= 22) { zodiac = 'Virgo' }
	if (month == 9 && date >= 23 || month == 10 && date <= 22) { zodiac = 'Libra' }
	if (month == 10 && date >= 23 || month == 11 && date <= 21) { zodiac = 'Scorpio' }
	if (month == 11 && date >= 22 || month == 12 && date <= 21) { zodiac = 'Sagittarius' }
	if (month == 12 && date >= 22 || month == 1 && date <= 19) { zodiac = 'Capricorn' }
	alert(zodiac)
}

function calculate3 (form) {
	var date = new Date(form.dt.value)
	var year = date.getFullYear()
	var diff = Math.abs(year - 1984)

	var colorNumber = Math.floor(diff / 12) % 5
	var creatureNumber = (diff - (colorNumber * 12)) % 12

	alert(colors[colorNumber] + ' ' + creatures[creatureNumber])
}
