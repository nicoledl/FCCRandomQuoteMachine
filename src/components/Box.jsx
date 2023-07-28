import { useEffect, useState } from "react";
import { generateRandomColor } from "./generateRandomColor";
import $ from "jquery";
import { frasesConAutores } from "./quoteArray";

const Box = () => {
  const [number, setNumber] = useState(5);

  useEffect(() => {
    const element = document.getElementById("myButton");
    if (element) {
      element.click(); // Simulate First Click
    }
  }, []);


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
    <div id="quote-box">
      <p id="text">
        <i className="fas fa-quote-left fs-3"></i>{" "}
        {frasesConAutores[number].frase}
      </p>
      <p id="author">- {frasesConAutores[number].autor}</p>
      <a
        id="tweet-quote"
        target="_blank"
        href="https://www.twitter.com/intent/tweet"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        id="tumblr-quote"
        target="_blank"
        href="https://www.tumblr.com/login"
        rel="noreferrer"
      >
        <i className="fab fa-tumblr"></i>
      </a>
      <button id="new-quote" onClick={handleClick}>
        Nueva Frase
      </button>
    </div>
  );
};

export default Box;
