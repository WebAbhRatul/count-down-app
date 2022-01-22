function countdown() {
  let futureDate = new Date(2023, 0, 1).getTime();
  let now = new Date().getTime();
  let gap = futureDate - now;
  console.log(gap);

  //scconds
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  document.querySelector(".day").textContent = Math.floor(gap / day);
  document.querySelector(".hour").textContent = Math.floor((gap % day) / hour);
  document.querySelector(".minute").textContent = Math.floor(
    (gap % hour) / minute
  );
  document.querySelector(".second").textContent = Math.floor(
    (gap % minute) / second
  );
}

setInterval(countdown, 1000);
