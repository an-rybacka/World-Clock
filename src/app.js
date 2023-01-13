function showTime(event) {
  if (event.target.value === "Lisbon") {
    alert("❤️");
  }
  if (event.target.value === "Tokyo") {
    alert("💙");
  }
  if (event.target.value === "Bogota") {
    alert("💛");
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showTime);
