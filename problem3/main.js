var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timer = false;

function start() {
    timer = true;
    stopWatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
    document.getElementById("milSecs").innerHTML = "00";
}

function stopWatch() {
    if (timer == true) {
        milliseconds = milliseconds + 1;
        if (milliseconds == 100) {
            seconds = seconds + 1;
            milliseconds = 0;
        }
        if (seconds == 60) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
            seconds = 0;
        }
        var hrString = hours;
        var minsString = minutes;
        var secString = seconds;
        var milSecString = milliseconds;
        if (hours < 10) {
            hrString = "0" + hrString;
        }
        if (minutes < 10) {
            minsString = "0" + minsString;
        }
        if (seconds < 10) {
            secString = "0" + secString;
        }
        if (milliseconds < 10) {
            milSecString = "0" + milSecString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("mins").innerHTML = minsString;
        document.getElementById("secs").innerHTML = secString;
        document.getElementById("milSecs").innerHTML = milSecString;
        setTimeout("stopWatch()", 10);
    }
}