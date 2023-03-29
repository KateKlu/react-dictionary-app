import React from "react";

export default function ShowMeaningData(props) {
  if (props.value) {
    return (
      <p>
        {props.name}: {props.value}
      </p>
    );
  } else {
    return null;
  }
}
