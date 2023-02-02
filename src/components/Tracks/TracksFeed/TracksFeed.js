import Waveform from "../../Waveform/Waveform";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

import { Link } from "react-router-dom";

import "./TracksFeed.scss";

function TracksFeed({ tracksList, toggleLike, isActive }) {
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return !tracksList ? (
    "Loading"
  ) : (
    <>
      <div className="tracksfeed">
        <h2 className="tracksfeed__title">Latest</h2>
        <div className="track__container">
          {transition((style, item) =>
            item
              ? tracksList.map((track) => {
                  return (
                    <animated.div
                      style={style}
                      className="track"
                      key={track.id}
                    >
                      <div className="track__content">
                        <div className="track__info">
                          <Link to={`/producers/${track.producer_id}`}>
                            <img
                              className="track__image"
                              alt="user avatar"
                              src={track.image_url}
                            ></img>
                          </Link>
                          <div className="track__text-container">
                            <Link
                              to={`/producers/${track.producer_id}`}
                              className="track__text track__text--bold"
                            >
                              {track.name}
                            </Link>
                            <Link
                              to={`/tracks/${track.id}`}
                              className="track__text"
                            >
                              {track.title}
                            </Link>
                          </div>
                        </div>
                        <Waveform
                          likedValue={track.liked}
                          clickedId={track.id}
                          url={track.audio_url}
                          toggleLike={toggleLike}
                          trackId={track.id}
                        />
                      </div>
                    </animated.div>
                  );
                })
              : ""
          )}
        </div>
      </div>
    </>
  );
}

export default TracksFeed;
