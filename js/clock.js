const clock = document.querySelector('#clock');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    hoursSpan.innerText = `${hours}`;
    minutesSpan.innerText = `${minutes}`; 
    secondsSpan.innerText = `${seconds}`;
}
getClock();
setInterval(getClock, 1000);
