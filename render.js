const clockDisplay = document.getElementById('clock');
let catBttn = document.querySelector('#changeCatBg');

catBttn.addEventListener('click', () => {
    var number = Math.floor(Math.random() * 12) + 1;
    var filepath = "url(cat" + number + ".jpg)";
    document.body.style.backgroundImage = filepath;
});


function updateClock() {
    const currentDate = new Date();

    if ((currentDate.getMinutes() == 59) && (currentDate.getSeconds() == 59)) {
        var number = Math.floor(Math.random() * 12) + 1;
        var filepath = "url(cat" + number + ".jpg)";
        document.body.style.backgroundImage = filepath;
    }
    const secondsRatio = formatTime(currentDate.getSeconds());
    const minutesRatio = formatTime(currentDate.getMinutes());
    const hoursRatio = formatTime(currentDate.getHours());

    clockDisplay.innerText=`${hoursRatio} : ${minutesRatio} : ${secondsRatio}`;
};

function formatTime (time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
};

setInterval(updateClock, 1000);