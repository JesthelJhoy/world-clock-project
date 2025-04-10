function updateTime() {
  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTime = moment().tz("Europe/Rome");

  milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
  milanTimeElement.innerHTML = milanTime.format("HH:mm:ss A");

  // london

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss A");

  // Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss A");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
   <div class="city-card">
   <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTime.format("HH:mm A")}</div>
</div>
<a href="index.html" class="home" style="display:block; margin-top:20px; margin-left:250px; text-decoration:underline; font-weight:bold; color:antiquewhite; font-size:16px;">Back to homepage</a>

  `;
}

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCity);
