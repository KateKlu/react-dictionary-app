import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.wordData) {
    return (
      <div className="Result">
        <section>
          <h1>{props.wordData.word}</h1>
          <em>[{props.wordData.phonetic}]</em>
        </section>

        {props.wordData.meanings.map(function (wordMeaning, index) {
          return (
            <section key={index}>
              <Meaning wordData={wordMeaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
