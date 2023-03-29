import React, { useState } from "react";
import axios from "axios";
import Resalt from "./Resalt";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [loaded, setLoaded] = useState(false),
    [word, setWord] = useState(props.defaultWord),
    [wordData, setWordData] = useState({});

  function changeWord(event) {
    setWord(event.target.value);
  }

  function search() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f",
      apiLink = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios(apiLink).then(handleResponse);
  }

  function handleResponse(response) {
    setWordData(response.data);
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word would you like to look up?</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  autoFocus={true}
                  placeholder="Search for a word"
                  defaultValue={props.defaultWord}
                  className="w-100 h-100"
                  onChange={changeWord}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </section>

        <Resalt wordData={wordData} />
        <Photos />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
