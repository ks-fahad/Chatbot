function refreshTime() {
  const timeDisplay = document.getElementById("datetime");
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today = new Date();
  const dateString1 = today.toLocaleDateString("bn-BD", options);
  const dateString2 = new Date().toLocaleString();
  const formattedString = dateString1 + " | " + dateString2.slice(11, dateString2.length);
  timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);

function loginOption() {
  const displayOption1 = document.getElementById("humanchat");
  const displayOption2 = document.getElementById("chatwithbots");
  if (displayOption1.style.display == "none") {
    displayOption1.style.display = "block";
    displayOption2.style.display = "none";
  }
  else {
    displayOption1.style.display = "none";
  }
}
function gochatbots() {
  const displayOption1 = document.getElementById("humanchat");
  const displayOption2 = document.getElementById("chatwithbots");
  if (displayOption2.style.display == "none") {
    displayOption2.style.display = "block";
    displayOption1.style.display = "none";
  }
  else {
    displayOption2.style.display = "none";
  }
}