function getDate() {
  let now = new Date();
  console.log(now.getHours(), now.getMinutes(), now.getSeconds());
  updateHandle("clock-second", now.getSeconds() * 6);
  updateHandle("clock-minute", now.getMinutes() * 6);
  updateHandle("clock-hour", now.getHours() * 30);
}

setInterval(() => {
  getDate();
}, 1000);
function updateHandle(id, deg) {
  document.getElementById(id).style.transform = `rotate(${deg}deg)`;
}
