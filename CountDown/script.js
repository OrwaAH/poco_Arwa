const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
let graduation = new Date(2022, 11, 16);
let countDowninterval;
const current = new Date();
let Difference_In_Time = graduation.getTime() - current.getTime();
const contFinish = document.querySelector(".countFinish");
const contStart = document.querySelector(".countStart");

function showCount() {
    contFinish.innerText = ""
    contStart.style.display = "flex"
    resume()
}

function seconds20() {
    showCount()
    Difference_In_Time = 20000;
}

function coffee() {
    showCount()
    Difference_In_Time = 15 * 60 * 1000;
}

function lunche() {
    showCount()
    Difference_In_Time = 60 * 60 * 1000;
}

function stopCount() {
    clearInterval(countDowninterval);
}

function resume() {
    stopCount()
    countDowninterval = setInterval(goCountown, 1000)
}

function reset() {
    showCount();
    const current = new Date();
    Difference_In_Time = graduation.getTime() - current.getTime();
}

function goCountown() {
    let sec = Difference_In_Time / 1000;
    let day = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    let hrs = Math.floor(sec / 3600) % 24;
    let min = Math.floor(sec / 60) % 60;
    let s = Math.floor(sec) % 60
    days.innerText = day;
    hours.innerText = hrs;
    minutes.innerText = min;
    seconds.innerText = s;
    // console.log(day + hrs + min + s)

    if ((day + hrs + min + s) < 1) {
        clearInterval(countDowninterval);
        contFinish.innerText = "Congratulation, You've done it !"
        contStart.style.display = "none"
    }

    Difference_In_Time -= 1000;
}

goCountown()

countDowninterval = setInterval(goCountown, 1000)


