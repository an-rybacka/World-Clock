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
