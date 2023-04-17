const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const millsEl = document.getElementById("milliseconds")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ms = new Date().getMilliseconds(2)
    let ampm = "AM"

    if (h > 12){
        h = h-12
        ampm = "PM"
    }
    h = h<10 ? "0"+ h : h;
    m = m<10 ? "0"+ m : m;
    s = s<10 ? "0"+ s : s;
    ms = ms<10 ? "0"+ms : ms;

    hourEl.innerText= h;
    minEl.innerText= m;
    secEl.innerText= s;
    ampmEl.innerText = ampm;
    millsEl.innerText= ms;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();
