function updateTime() {
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbonTimeElement.innerHTML = `${lisbonTime.format(
      "h:mm:ss"
    )} <small>${lisbonTime.format("A")}</small>`;
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTime.format(
      "h:mm:ss"
    )} <small>${tokyoTime.format("A")}</small>`;
  }

  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  if (bogotaElement) {
    let bogotaDateElement = bogotaElement.querySelector(".date");
    let bogotaTimeElement = bogotaElement.querySelector(".time");
    let bogotaTime = moment().tz("America/Bogota");

    bogotaDateElement.innerHTML = bogotaTime.format("MMMM Do YYYY");
    bogotaTimeElement.innerHTML = `${bogotaTime.format(
      "h:mm:ss"
    )} <small>${bogotaTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
  cityTimeZone = moment.tz.guess();
}

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
       <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
        </div>
        <a href="/">Go Back</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
