import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.wordData) {
    return (
      <div className="Result">
        <section>
          <h1>{props.wordData.word}</h1>
          <p>[{props.wordData.phonetic}]</p>
        </section>
        <div>
          {props.wordData.meanings.map(function (wordMeaning, index) {
            return (
              <section key={index}>
                <Meaning wordData={wordMeaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
