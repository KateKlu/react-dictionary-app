import React from "react";

export default function ShowMeaningData(props) {
  if (props.value) {
    if (props.name === "example") {
      return (
        <p>
          {props.name}: {props.value}
        </p>
      );
    } else {
      return (
        <div>
          <span>{props.name}:</span>
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
