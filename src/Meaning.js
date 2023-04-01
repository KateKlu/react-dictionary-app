import React from "react";
import MeaningData from "./MeaningData";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.wordData.partOfSpeech}</h2>
      <p>
        <b>definition:</b> {props.wordData.definition}
      </p>
      <em>
        <MeaningData name="example" value={props.wordData.example} />
      </em>
      <MeaningData name="synonyms" value={props.wordData.synonyms} />
      <MeaningData name="antonyms" value={props.wordData.antonyms} />
    </div>
  );
}
