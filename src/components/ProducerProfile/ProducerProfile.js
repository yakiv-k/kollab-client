import Waveform from "../Waveform/Waveform";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./ProducerProfile.scss";

function ProducerProfile({ selectedProducer, selectedProducerTracks }) {
  // React spring animated
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return !selectedProducer ? (
    "Loading"
  ) : (
    <>
      <section className="producer">
        <h1 className="producer__name">{selectedProducer.name}</h1>
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className="producer__profile profile">
              <div className="profile__layout">
                <div className="profile__subdivision profile__subdivision--left">
                  <img
                    className="producer__image"
                    src={selectedProducer.image_url}
                  ></img>
                </div>
                <div className="profile__subdivision profile__subdivision--right">
                  <div className="profile__details">
                    <p className="profile__title">Contact</p>
                    <p className="profile__text">{selectedProducer.contact}</p>
                  </div>
                </div>
              </div>
              <div className="profile__catalogue catalogue">
                <h2 className="catalogue__heading">Catalogue</h2>
                <article className="catalogue__content">
                  {selectedProducerTracks.map((track) => {
                    return (
                      <div className="catalogue__card card" key={track.id}>
                        <div className="card__content">
                          <div className="card__info">
                            <img
                              className="card__image"
                              alt="user avatar"
                              src={track.image_url}
                            ></img>
                            <div className="card__text-container">
                              <p className="card__text card__text--bold">
                                {track.name}
                              </p>
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

export default ProducerProfile;
