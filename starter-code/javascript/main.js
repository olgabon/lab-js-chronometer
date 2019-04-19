window.onload = function (){


var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');


var timer = document.querySelector("#timer");
var watch = new Chronometer ();

function setStopBtn() {
   btnLeft.classList.replace("start", "stop")
   btnLeft.innerHTML = "STOP"
}
function setSplitBtn() {
   btnRight.classList.replace("reset", "split")
   btnRight.innerHTML = "SPLIT";
   
}

function setResetBtn() {
    btnRight.classList.replace("split", "reset")
    btnRight.innerHTML = "RESET"
 }

 function setStartBtn() {
    btnLeft.classList.replace("stop", "start")
    btnLeft.innerHTML = "START"
    
 }

//Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        setStopBtn();
        setSplitBtn();
        watch.start();
} else {
    setStartBtn();
    setResetBtn();
    watch.stop();
}

 });
var splitList = document.getElementById("splits")
// // Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnLeft.classList.contains('start')) {
    setResetBtn();
    watch.reset();
}else {
    setSplitBtn();
    var newTime = document.createElement("li")
    newTime.innerHTML = document.querySelector("#timer").innerHTML;
    splitList.appendChild(newTime)

}

});
}