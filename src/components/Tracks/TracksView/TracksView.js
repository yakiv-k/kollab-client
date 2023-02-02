import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import Waveform from "../../Waveform/Waveform";
import Header from "../../Header/Header";
import returnIcon from "../../../assets/icons/chevron-left.svg";
import axios from "axios";

import "./TracksView.scss";

function TracksView(props) {
  // React spring animated
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackStems, setSelectedTrackStems] = useState([]);

  const track_id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://web-production-5250.up.railway.app/tracks/${track_id}`
        );
        setSelectedTrack(response.data.track);
        setSelectedTrackStems(response.data.stems);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleGoBack = () => {
    props.history.goBack();
  };

  return !selectedTrack ? (
    "Loading"
  ) : (
    <>
      <Header />
      <div className="tracksview-container">
        <section className="tracksview">
          <h1 className="tracksview__heading">View</h1>

          {transition((style, item) =>
            item ? (
              <animated.div style={style} className="tracksview__selected">
                <img
                  onClick={handleGoBack}
                  src={returnIcon}
                  className="tracksview__icon"
                ></img>
                <div className="tracksview__waveform">
                  <img
                    src={selectedTrack.image_url}
                    alt="user avatar"
                    className="tracksview__image"
                  ></img>
                  <Waveform
                    likedValue={selectedTrack.liked}
                    url={selectedTrack.audio_url}
                  />
                </div>
                <div className="tracksview__details">
                  <div className="tracksview__details-section">
                    <p className="tracksview__title">Title</p>
                    <p className="tracksview__content">{selectedTrack.title}</p>
                  </div>
                  <div className="tracksview__details-section">
                    <p className="tracksview__title">Producer</p>
                    <p className="tracksview__content">{selectedTrack.name}</p>
                  </div>
                  <div className="tracksview__details-section">
                    <p className="tracksview__title">BPM</p>
                    <p className="tracksview__content">{selectedTrack.BPM}</p>
                  </div>
                  <div className="tracksview__details-section">
                    <p className="tracksview__title">Notes</p>
                    <p className="tracksview__content">
                      {selectedTrack.caption}
                    </p>
                  </div>
                </div>
                <div className="tracksview__stems stems">
                  <h2 className="stems__title">Stems</h2>
                  <section className="stems__files-container">
                    {selectedTrackStems.map((file) => {
                      return (
                        <a
                          className="stems__file"
                          download={file.files}
                          target="_blank"
                          href={file.files}
                          key={file.id}
                        >
                          {file.name}
                        </a>
                      );
                    })}
                  </section>
                </div>
              </animated.div>
            ) : (
              ""
            )
          )}
        </section>
      </div>
    </>
  );
}

export default TracksView;
