import React from "react";
// import "./Wordcard.css";
import ButtonDelete from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";

export default function Wordcard() {
  return (
    <div className="Wordcard-wrapper">
      <h3>Слово: Apple</h3>
      <p>Значение: съедобный кислый фрукт</p>
      <p>Транскрипция: [æpl]</p>
      <p>Перевод: яблоко</p>
      <p>Тема: фрукты</p>
      <ButtonDelete />
      <ButtonEdit />
    </div>
  );
}
