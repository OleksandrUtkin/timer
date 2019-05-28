	
let ticTuck = setInterval(function (){
	let dateNow = new Date().getTime(),
		dateMustBe = new Date(2019, 04, 28, 03, 52),
		timeLeft = Math.floor((dateMustBe - dateNow) / 1000),
		sec = timeLeft % 60,
		secToMinutes = Math.floor(timeLeft / 60),
		minutes = secToMinutes % 60,
		secToHours = Math.floor(timeLeft / 3600),
		hours = secToHours % 24,
		Days = Math.floor(timeLeft / 86400);
	document.querySelector(".days_left").innerHTML = Days;	
	document.querySelector(".hour_left").innerHTML = hours;	
	document.querySelector(".minutes_left").innerHTML = minutes;	
	document.querySelector(".sec_left").innerHTML = sec;	
	if (sec < 0) {
		clearInterval(ticTuck);
		alert("красавчик")
	}
},1000)