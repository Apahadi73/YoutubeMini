import React from "react";
import { faArrowUp, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon icon={faArrowCircleUp} />
            MiniYouTube
          </a>
        </nav>
        <div className="container">
          <div>
            <SearchBar />
          </div>
          <div className="row">
            <div className="col-8 col-lg-8">
              <VideoDetail />
            </div>
            <div className="col-4 col-lg-4">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
