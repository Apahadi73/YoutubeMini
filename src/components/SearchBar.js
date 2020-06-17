import React from "react";
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import { getUserInput, fetchYoutubeVideos } from "../actions";

class SearchBar extends React.Component {
  renderView() {
    return (
      <div style={{ padding: 5 }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="input-group mb-3" style={{ width: "90%" }}>
            <input
              type="text"
              className="form-control"
              style={{ width: "80%" }}
              placeholder="Type your search here..."
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  const searchInput = event.target.value;
                  this.props.getUserInput(searchInput);
                  this.props.fetchYoutubeVideos(searchInput);
                }
              }}
            />
            <button
              type="submit"
              className="btn btn-info"
              style={{ float: "left" }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    );
  }
  render() {
    return <div>{this.renderView()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { userInput: state.userInput, youtubeVideos: state.youtubeVideos };
};

export default connect(mapStateToProps, { getUserInput, fetchYoutubeVideos })(
  SearchBar
);
