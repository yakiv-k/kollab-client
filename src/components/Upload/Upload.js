import { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./Upload.scss";

function Upload({ uploadFiles, trackHandler, ImageHandler, filesHandler }) {
  // React spring animated
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return (
    <>
      <section onSubmit={uploadFiles} className="upload">
        <h1 className="upload__title">Share</h1>

        {transition((style, item) =>
          item ? (
            <animated.div style={style}className="upload__content">
              <form className="upload__form form" encType="multipart/form-data">
                <label className="form__label" htmlFor="title">
                  Title
                </label>
                <input
                  className="form__input"
                  placeholder="Enter a title"
                  type="text"
                  name="title"
                  id="title"
                ></input>
                <label className="form__label" htmlFor="bpm">
                  BPM
                </label>
                <input
                  className="form__input"
                  placeholder="Enter track BPM"
                  type="text"
                  name="bpm"
                  id="bpm"
                ></input>
                <label className="form__label" htmlFor="caption">
                  Caption
                </label>
                <input
                  className="form__input"
                  placeholder="Enter a caption"
                  type="text"
                  name="caption"
                  id="caption"
                ></input>
                <label className="form__label">Choose track</label>
                <input
                  className="form__input form__input--padding"
                  type="file"
                  name="track"
                  id="track"
                  accept=".wav, .mp3"
                  onChange={trackHandler}
                ></input>
                <label className="form__label">Add image</label>
                <input
                  className="form__input form__input--padding"
                  type="file"
                  name="image"
                  id="image"
                  accept=".jpeg, .jpg, .png"
                  onChange={ImageHandler}
                ></input>
                <label className="form__label">Add project files</label>
                <input
                  className="form__input form__input--padding"
                  type="file"
                  name="stems"
                  id="stems"
                  accept=".wav, .mp3"
                  multiple="multiple"
                  onChange={filesHandler}
                ></input>
                <button className="form__button">Upload</button>
              </form>
            </animated.div>
          ) : (
            ""
          )
        )}
      </section>
    </>
  );
}

export default Upload;
