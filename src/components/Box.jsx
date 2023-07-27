import { useEffect, useState } from "react";
import { generateRandomColor } from "./generateRandomColor";
import $ from "jquery";

const Box = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const element = document.getElementById("myButton");
    if (element) {
      element.click(); // Simulate First Click
    }
  }, []);

  const frasesConAutores = [
    {
      frase:
        "La vida es lo que sucede mientras estás ocupado haciendo otros planes.",
      autor: "John Lennon",
    },
    {
      frase: "No hay camino para la paz; la paz es el camino.",
      autor: "Mahatma Gandhi",
    },
    {
      frase: "No cuentes los días, haz que los días cuenten.",
      autor: "Muhammad Ali",
    },
    {
      frase: "El único modo de hacer un gran trabajo es amar lo que haces.",
      autor: "Steve Jobs",
    },
    {
      frase: "La creatividad es la inteligencia divirtiéndose.",
      autor: "Albert Einstein",
    },
  ];

  const handleClick = () => {
    $("#text").animate({ opacity: 0 }, 500, function () {
      // Esta función se ejecuta después de que se completa la animación de desvanecimiento
      let randomNum = Math.floor(Math.random() * frasesConAutores.length);
      setNumber(randomNum);
      generateRandomColor();

      $("#text").animate({ opacity: 1 }, 500);
    });
  };

  return (
    <div id="quote-box" className="container-sm">
      <p id="text">
        <i className="fas fa-quote-left fs-3"></i> {frasesConAutores[number].frase}
      </p>
      <p id="author">- {frasesConAutores[number].autor}</p>
      <a id="tweet-quote" target="_blank" href="https://www.twitter.com/intent/tweet" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a id="tumblr-quote" target="_blank" href="https://www.tumblr.com/login" rel="noreferrer">
        <i className="fab fa-tumblr"></i>
      </a>
      <button id="new-quote-button" onClick={handleClick}>
        New quote
      </button>
    </div>
  );
};

export default Box;
