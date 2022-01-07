export default function handleCountDown() {
  const dealDay = document.querySelector('#deal-day');
  const dealHour = document.querySelector('#deal-hour');
  const dealMinute = document.querySelector('#deal-minute');
  const dealSecond = document.querySelector('#deal-second');
  const countDate = new Date('feb 7, 2022 00:00:00').getTime();

  function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let dayTime = Math.floor(gap / day);
    let hourTime = Math.floor((gap % day) / hour);
    let minuteTime = Math.floor((gap % hour) / minute);
    let secondTime = Math.floor((gap % minute) / second);

    dealDay.innerHTML = dayTime;
    dealHour.innerHTML = hourTime;
    dealMinute.innerHTML = minuteTime;
    dealSecond.innerHTML = secondTime;
  }
  setInterval(function () {
    countDown();
  });
}
