import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [loaded, setLoaded] = useState(false),
    [word, setWord] = useState(props.defaultWord),
    [wordData, setWordData] = useState({}),
    [photos, setPhotos] = useState([]);

  function changeWord(event) {
    setWord(event.target.value);
  }

  function handlePhoto(response) {
    console.log(`photo ${response.data.photos}`);
    setPhotos(response.data.photos);
  }

  function searchPhoto() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f",
      apiLink = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
    axios(apiLink).then(handlePhoto);
  }

  function handleResponse(response) {
    console.log(`data${response.data}`);

    setWordData(response.data);
    setLoaded(true);
    searchPhoto();
  }

  function search() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f",
      apiLink = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios(apiLink).then(handleResponse);
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
        <Result wordData={wordData} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
