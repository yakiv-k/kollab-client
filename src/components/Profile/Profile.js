import { Link } from "react-router-dom";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import Waveform from "../Waveform/Waveform";

import "./Profile.scss";

function Profile({ userProfile, likedTracks }) {
  // React spring animated
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return (
    <>
      <section className="profile-page">
        <h1 className="profile-page__name">{userProfile.name}</h1>
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className="profile-page__info info">
              <div className="info__layout">
                <div className="info__subdivision info__subdivision--left">
                  <img
                    className="info__image"
                    src={userProfile.image_url}
                  ></img>
                </div>
                <div className="info__subdivision info__subdivision--right">
                  <div className="info__details">
                    <p className="info__title">Contact</p>
                    <p className="info__text">{userProfile.contact}</p>
                  </div>
                </div>
              </div> 
              <div className="info__liked liked">
                <h2 className="liked__heading">Liked</h2>
                <article className="liked__content">
                  {likedTracks.map((track) => {
                    return (
                      <div className="liked__card card" key={track.id}>
                        <div className="card__content">
                          <div className="card__info">
                            <img
                              className="card__image"
                              alt="user avatar"
                              src={track.image_url}
                            ></img>
                            <div className="card__text-container card__text-container--flex">
                              <Link
                                to={`/producers/${track.producer_id}`}
                                className="card__text card__text--bold"
                              >
                                {track.name}
                              </Link>
                              <Link
                                to={`/tracks/${track.id}`}
                                className="card__text"
                              >
                                {track.title}
                              </Link>
                            </div>
                          </div>
                          <Waveform likedValue={track.liked} url={track.audio_url} />
                        </div>
                      </div>
                    );
                  })}
                </article>
              </div>
            </animated.div>
          ) : (
            ""
          )
        )}
      </section>
    </>
  );
}

export default Profile;
