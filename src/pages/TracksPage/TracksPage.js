import TracksFeed from "../../components/Tracks/TracksFeed/TracksFeed";
import Header from "../../components/Header/Header";
import { Component } from "react";
import axios from "axios";

import "./TracksPage.scss";

class TracksPage extends Component {
  state = {
    tracks: [],
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    axios
      .get("https://web-production-5250.up.railway.app/tracks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          tracks: response.data,
        });
      });
  }
  
  render() {
    return (
      <>
        <Header />
        <section className="tracks">
          <TracksFeed
            toggleLike={this.handleLike}
            tracksList={this.state.tracks}
          />
        </section>
      </>
    );
  }
}

export default TracksPage;
