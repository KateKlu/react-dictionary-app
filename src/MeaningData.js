import React from "react";

export default function MeaningData(props) {
  if (props.value) {
    if (props.name === "example") {
      return (
        <p>
          <b> {props.name}:</b> {props.value}
        </p>
      );
    } else {
      return (
        <div>
          <b>{props.name}:</b>
          <ul>
            {props.value.map(function (value, index) {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
      );
    }
  } else {
    return null;
  }
}
