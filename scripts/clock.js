const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

function clockGo(){
    var date = new Date();
    //console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //console.log('Hour: ' + hr + ' Minutes: ' + min + ' Seconds: ' + sec);

    let hrPos = (hr * 360/12) + ((min*6)/12);
    let minPos = (min * 6) + (sec*(360/60)/60);// or use shorter (sec*(6/60))
    let secPos = sec * 6; // 360/60
    //console.log(secPos);

    HOURHAND.style.transform = 'rotate(' + hrPos + 'deg)'; 
    MINUTEHAND.style.transform = 'rotate(' + minPos + 'deg)'; 
    SECONDHAND.style.transform = 'rotate(' + secPos + 'deg)'; 
}

var myInterval = setInterval(clockGo, 1000);
// this js works fine without the transition property on the hr, min, sec id's.


