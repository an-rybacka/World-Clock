function showTime(event) {
  if (event.target.value.length > 0) {
    alert(
      `It is ${moment()
        .tz(event.target.value)
        .format("dddd, MMMM D, YYYY HH:mm A")} in ${event.target.value}`
    );
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showTime);

//Lisbon
let lisbonElement = document.querySelector("#lisbon");
let lisbonDateElement = lisbonElement.querySelector(".date");
let lisbonTimeElement = lisbonElement.querySelector(".time");
let lisbonTime = moment().tz("Europe/Lisbon");

lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
lisbonTimeElement.innerHTML = `${lisbonTime.format("h:mm:ss")} <small>${lisbonTime.format("A")}</small>`;

//Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = `${tokyoTime.format(
  "h:mm:ss"
)} <small>${tokyoTime.format("A")}</small>`;

//Bogota
let bogotaElement = document.querySelector("#bogota");
let bogotaDateElement = bogotaElement.querySelector(".date");
let bogotaTimeElement = bogotaElement.querySelector(".time");
let bogotaTime = moment().tz("America/Bogota");

bogotaDateElement.innerHTML = bogotaTime.format("MMMM Do YYYY");
bogotaTimeElement.innerHTML = `${bogotaTime.format(
  "h:mm:ss"
)} <small>${bogotaTime.format("A")}</small>`;
