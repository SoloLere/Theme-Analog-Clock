const toggle = document.querySelector('.toggle');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const times = document.querySelector('.time');
const date = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', function(e){
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    html.classList.contains('dark')? e.target.innerHTML = 'Light Mode' : e.target.innerHTML = 'Dark Mode';
});

setTime();

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const dates = time.getDate();
    const hours = time.getHours();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const minutesFormated = time.getMinutes() + seconds/60;
    const hoursFormated = hours % 12 + minutes/60;

    hour.style.setProperty('--rotation', `${(hoursFormated/12)*360}deg`);
    minute.style.setProperty('--rotation', `${(minutesFormated/60)*360}deg`);
    second.style.setProperty('--rotation', `${(seconds/60)*360}deg`);
    times.innerHTML = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
    date.innerHTML  = `${days[day]}, ${months[month]} <span class="circle">${dates}</span>`;
}

setInterval(setTime, 1000);
