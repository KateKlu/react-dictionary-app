import React from "react";
import Meaning from "./Meaning";

export default function Resalt(props) {
  let meanings = props.wordData.meanings;

  return (
    <div className="Resalt">
      <section>
        <h1>{props.wordData.word}</h1>
        <p>[{props.wordData.phonetic}]</p>
      </section>
      <div>
        {meanings.map(function (wordMeaning, index) {
          return (
            <section key={index}>
              <Meaning wordData={wordMeaning} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
