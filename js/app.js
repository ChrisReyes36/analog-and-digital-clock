// Analog Clock
const sc = document.querySelector("#sc");
const mn = document.querySelector("#mn");
const hr = document.querySelector("#hr");
// Digital Clock
const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ampm = document.getElementById("ampm");

const analogClock = () => {
    setInterval(() => {
        const day = new Date();
        const hh = day.getHours() * 30;
        const mm = day.getMinutes() * 6;
        const ss = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);
};

const digitalClock = () => {
    setInterval(() => {
        const day = new Date();
        let hh = day.getHours();
        const am = hh >= 12 ? "PM" : "AM";
        hh = hh > 12 ? hh - 12 : hh;
        const mm = day.getMinutes();
        const ss = day.getSeconds();

        hour.innerHTML = `${hh}`.toString().padStart(2, "0");
        minutes.innerHTML = `${mm}`.toString().padStart(2, "0");
        seconds.innerHTML = `${ss}`.toString().padStart(2, "0");
        ampm.innerHTML = am;
    }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
    analogClock();
    digitalClock();
});
