function halloweenCountdown() {
	const halloweenDate = new Date('October 31, 2023 00:00');
	const currentDay = new Date();
	const difference = halloweenDate - currentDay;

	const msInSecond = 1000;
	const msInMinute = 60 * 1000;
	const msInHour = 60 * 60 * 1000;
	const msInDay = 24 * 60 * 60 *1000;

	const displayDay = Math.floor(difference/msInDay);
	document.querySelector(".days").textContent=displayDay;
	const displayHour = Math.floor((difference%msInDay)/msInHour);
	document.querySelector(".hours").textContent=displayHour;
	const displayMinute = Math.floor((difference%msInHour)/msInMinute);
	document.querySelector(".minutes").textContent=displayMinute;
	const displaySecond = Math.floor((difference%msInMinute)/msInSecond);
	document.querySelector(".seconds").textContent=displaySecond;

	if(difference <= 0) {
		document.querySelector(".days").textContent = 0;
		document.querySelector(".hours").textContent = 0;
		document.querySelector(".minutes").textContent = 0;
		document.querySelector(".seconds").textContent = 0;
		clearInterval(timerID);
		happyHalloween();
	}
}
let timerID = setInterval(halloweenCountdown,1000);

function happyHalloween(){
	const heading = document.querySelector("h1");
	heading.textContent = "HAPPY HALLOWEEN!!!";
	heading.classList.add("dayHalloween");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function(){
	document.querySelector("#myAudio").play();
})

