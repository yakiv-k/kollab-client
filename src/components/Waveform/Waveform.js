import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg";
import axios from "axios";

import "./Waveform.scss";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#AFAFAF",
  progressColor: "#576490",
  cursorColor: "#576490",
  barWidth: 1,
  barRadius: 3,
  responsive: true,

  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
});

export default function Waveform({ url, toggleLike, clickedId, likedValue }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const [liked, setLiked] = useState(likedValue);

  const toggleClass = (likedValue, idValue) => {
    let likedBool = 0;

    if (liked == 1) {
      likedBool = 0;
      setLiked(!liked);

      axios.patch("https://web-production-5250.up.railway.app/tracks", {
        liked: likedBool,
        id: idValue,
      });
    } else if (liked == 0) {
      likedBool = 1;
      setLiked(!liked);

      axios.patch("https://web-production-5250.up.railway.app/tracks", {
        liked: likedBool,
        id: idValue,
      });
    }
  };

  useEffect(() => {
    setLiked(likedValue);

    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div className="audio">
      <div id="waveform" ref={waveformRef} />
      <div className="waveform__controls">
        <div className="waveform__icons">
          <button className="waveform__button" onClick={handlePlayPause}>
            {!playing ? (
              <img alt="play icon" className="waveform__image" src={play}></img>
            ) : (
              <img
                alt="pause icon"
                className="waveform__image"
                src={pause}
              ></img>
            )}
          </button>
          <div
            onClick={() => toggleClass(likedValue, clickedId)}
            className={
              liked ? "waveform__like-icon active" : "waveform__like-icon"
            }
          ></div>
        </div>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step=".025"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
      </div>
    </div>
  );
}
