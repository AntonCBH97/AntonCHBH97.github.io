// Enlarge user input text when 'Bigger!' button is clicked
function largeText() {
  alert("Making the text bigger!");

  document.getElementById("user-txt").style.fontSize = "24pt";
}

// Apply different style properties when 'FancyShmancy' button is clicked
function fancyText() {
  alert("Making the text fancyshmancy!");

  document.getElementById("user-txt").style.fontWeight = "bold";
  document.getElementById("user-txt").style.color = "blue";
  document.getElementById("user-txt").style.textDecoration = "underline";
}

// Revert ALL style properties when 'BoringBetty' button is clicked
function boringText() {
  alert("Making the text boring!");

  document.getElementById("user-txt").style.fontWeight = "normal";
  document.getElementById("user-txt").style.color = "black";
  document.getElementById("user-txt").style.textDecoration = "none";
  document.getElementById("user-txt").style.fontSize = "initial";
}

// Modify user text to uppercase, and add '-MOO' suffix to end of sentences
function mooText() {
  alert("Making the text strange-moo!");

  let userText = document.getElementById("user-txt");
  let allCapText = userText.value.toUpperCase();

  let regularSentence = allCapText.split(".");
  let mooSentence = regularSentence.join("-Moo") + ".";

  userText.value = mooSentence;
}
