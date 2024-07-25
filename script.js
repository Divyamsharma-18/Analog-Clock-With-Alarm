// script.js

// Function to update clock hands
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Alarm functionality
document.getElementById('set-alarm').addEventListener('click', function() {
    const alarmTime = document.getElementById('alarm-time').value;
    if (alarmTime) {
        const [hours, minutes] = alarmTime.split(':').map(Number);
        const alarmDate = new Date();
        alarmDate.setHours(hours, minutes, 0, 0);

        const now = new Date();
        const timeToAlarm = alarmDate.getTime() - now.getTime();

        if (timeToAlarm > 0) {
            setTimeout(() => {
                document.getElementById('alarm-sound').play();
            }, timeToAlarm);
        }
    }
});
