const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPos = (hr * 360/12) + ((min*6)/12);
    let minPos = (min * 6) + (sec*(360/60)/60);// or use shorter (sec*(6/60))
    let secPos = sec * 6; // 360/60

function clockGo(){
    secPos = secPos + 6;
    minPos = minPos+(6/60);
    hrPos = hrPos + (30/3600);
    
    HOURHAND.style.transform = 'rotate(' + hrPos + 'deg)'; 
    MINUTEHAND.style.transform = 'rotate(' + minPos + 'deg)'; 
    SECONDHAND.style.transform = 'rotate(' + secPos + 'deg)'; 
}

var myInterval = setInterval(clockGo, 1000);
// this works fine without the transition property on the hr, min, sec id's.

function curTime(){
var timeNow = console.log(hr + ' ' + min + ' ' + sec);
}
var displayTime = setInterval(curTime, 1000);
