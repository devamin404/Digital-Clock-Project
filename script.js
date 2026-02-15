let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
// setInterval(() => {
// let currentTime = new Date();
//   let hours = currentTime.getHours().toString().padStart(2, "0");
//   let minutes = currentTime.getMinutes().toString().padStart(2, "0");
//   let seconds = currentTime.getSeconds().toString().padStart(2, "0");
//   hrs.textContent = hours;
//   min.textContent = minutes;
//   sec.textContent= seconds;
// },1000);
setInterval(() => {
  let currentTime = new Date();
  let hours = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  let minutes =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  let seconds =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  hrs.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
}, 1000);
