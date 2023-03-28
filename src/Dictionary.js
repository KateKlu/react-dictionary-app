import React from "react";
import Resalt from "./Resalt";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  return (
    <div className="Dictionary">
      <section>
        <h2>What word would you like to look up?</h2>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                onFocus={true}
                placeholder="Search for a word"
                defaultValue={props.defaultWord}
                className="w-100 h-100"
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

      <Resalt />
      <Photos />
    </div>
  );
}
