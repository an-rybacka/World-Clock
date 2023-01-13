function showTime(event) {

  if (event.target.value === "Lisbon") {
    alert(`It is ${moment()
    .tz("Europe/Lisbon")
    .format("dddd, MMMM D, YYYY HH:mm A")} in Lisbon, Portugal`);
  }
  if (event.target.value === "Tokyo") {
    alert(`It is ${moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM D, YYYY HH:mm A")} in Tokyo, Japan`);
  }
  if (event.target.value === "Bogota") {
    alert(`It is ${moment()
    .tz("America/Bogota")
    .format("dddd, MMMM D, YYYY HH:mm A")} in Bogota, Colombia`);
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showTime);
