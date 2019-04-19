function Chronometer() {
  var time = 0;
  var interval;
  var offset;
  var timehtml = document.querySelector("#timer");

  this.update = ()=> {
  time += split();
  let formattedTime = this.timeFormatter(time);
  timehtml.innerHTML = formattedTime;
  }

  function split() {
  var now = Date.now();
  var timePassed = now - offset;
  offset = now;
  return timePassed;
  }

  this.timeFormatter = function (timeInSeconds) {
    var time = new Date(timeInSeconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    return minutes + ":" + seconds
  }
  this.start = function () {
    if (!this.isOn) {
      interval = setInterval (this.update, 1);
      offset = Date.now();
      this.isOn = true;
    }
  }
  this.isOn = false;

  this.stop = function () {
    if (this.isOn) {
      clearInterval(interval);
      interval = 0;
      this.isOn = false;
    }
  }
  this.reset = function () {
    time = 0;
    timehtml.innerHTML = "00:00";
  }
}

let watch = new Chronometer()
