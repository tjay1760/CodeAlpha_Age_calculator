const goButton = document.getElementById("go");
const dayMs = 1000 * 60 * 60 * 24;
async function getDate() {
  let years, months, days, hours, minutes, seconds;
  let y1, y2, mn1, mn2, d1, d2, h1, h2, mu1, mu2, s1, s2;
  const dateNow = new Date();
  const pickedDate = document.getElementById("input-date").value;
  const birthday = new Date(pickedDate);
  y1 = birthday.getFullYear();
  mn1 = birthday.getMonth();
  d1 = birthday.getDate();
  h1 = birthday.getHours();
  mu1 = birthday.getMinutes();
  s1 = birthday.getSeconds();
  y2 = dateNow.getFullYear();
  mn2 = dateNow.getMonth();
  d2 = dateNow.getDate();
  h2 = dateNow.getHours();
  mu2 = dateNow.getMinutes();
  s2 = dateNow.getSeconds();
  years = y2 - y1;
  if (mn2 >= mn1) {
    months = mn2 - mn1;
  } else {
    months = 12 - mn1 + mn2 + 1;
    years--;
  }
  if (d2 >= d1) {
    days = d2 - d1;
  } else {
    switch (mn1) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        days = 31 - d1 + d2;
        break;
      case 1:
        y1 % 4 == 0 ? (days = 28 - d1 + d2) : (days = 29 - d1 + d2);
        break;
      case 3:
      case 5:
      case 8:
      case 10:
          days = 30 - d1 + d2;
        break;
    }
months--
  }
  if (h2 >= h1 ){
hours = h2 - h1
  }else{
    hours = 24 - h1 + d2;
    days--
  }
  if (mu2 >= mu1 ){
    minutes = mu2 - mu1
      }else{
        minutes = 60 - mu1 + mu2;
        hours--
      }
      if (s2 >= s1 ){
        seconds = s2 - s1
          }else{
            hours = 60 - s1 + s2;
            minutes--
          }
   return {years,months,days,hours,minutes,seconds}
}

goButton.addEventListener("click", async ()=>{
const output = document.querySelector(".output")
 const time = await getDate()
 console.log(time)
output.innerHTML = `Your Age :: <label>Years ${time.years}</label>
<label>Month: ${time.months}</label>
<label>Day: ${time.days}</label>
<label>Hours: ${time.hours}</label>
<label>Minutes: ${time.minutes}</label>
<label>Seconds: ${time.seconds}</label>`
});
