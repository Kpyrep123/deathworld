document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen');
    const scrollUpButton = document.getElementById('scrollUp');
    const scrollDownButton = document.getElementById('scrollDown');

    const scrollScreen = offset => screen.scrollBy({ top: offset, behavior: 'smooth' });

    scrollUpButton.addEventListener('click', () => scrollScreen(-400));
    scrollDownButton.addEventListener('click', () => scrollScreen(400));
});

const addLeadingZero = number => (number < 10 ? '0' : '') + number;

function updateTime() {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1860);

    let day = addLeadingZero(currentDate.getDate());
    let month = addLeadingZero(currentDate.getMonth() + 1);
    let year = currentDate.getFullYear();
    let hours = addLeadingZero(currentDate.getHours());
    let minutes = addLeadingZero(currentDate.getMinutes());
    let seconds = addLeadingZero(currentDate.getSeconds());

    const formattedDate = `${day}.${month}.${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('date').textContent = `Дата: ${formattedDate}`;
    document.getElementById('time').textContent = `Время: ${formattedTime}`;
}

updateTime();
setInterval(updateTime, 1000);
document.getElementById("myButton").addEventListener("click", function() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
    document.documentElement.msRequestFullscreen();
  }
});

// Load the DNS module
const dns = require('dns');

// Use dns.resolve() function to resolve the DNS records
dns.resolve('yourwebsite.com', 'A', (err, records) => {
    if(err) {
        console.log(err);
    } else {
        console.log(records);
    }
});