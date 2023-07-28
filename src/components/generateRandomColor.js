import $ from "jquery";

// Función para generar un color aleatorio
function randomColor() {
  var blueTones = [
    "#1f78b4",
    "#3182bd",
    "#4eb3d3",
    "#74add1",
    "#8dd3c7",
    "#bae4b3",
    "#b3de69",
    "#fdbf6f",
    "#ff7f00",
  ];
  var randomIndex = Math.floor(Math.random() * blueTones.length);
  return blueTones[randomIndex];
}

// Función para aplicar el color aleatorio a los elementos
function applyRandomColor(color) {
  $("body").css("background-color", color);
  $("#quote-box #text, #quote-box #author").css("color", color);
  $(
    "#quote-box #tweet-quote, #quote-box #tumblr-quote, #quote-box #new-quote"
  ).css("background-color", color);
}

// Generar un color aleatorio y aplicarlo a los elementos
export function generateRandomColor() {
  var randomColorValue = randomColor();
  applyRandomColor(randomColorValue);

  // Asignar el evento click al botón "New Quote"
  $("#new-quote").on("click", function () {
    var newRandomColor = randomColor();
    applyRandomColor(newRandomColor);
  });
}
