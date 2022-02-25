const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

// Use setInterval in built function
setInterval(() => {
  // Load the date function to get hours minutes, seconds,
  //   and date & day

  let day = new Date();
  //   lets separate hr, min, sec

  let hh = day.getHours() * 30;
  //   get the hour & multiply it with 30 deg pop
  // while min & sec with 6 deg pop

  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  //   Lets change the style according to the value we have

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
