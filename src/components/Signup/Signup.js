import { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./Signup.scss";

function Signup({ signUp, registered, handleImage }) {
  // React spring animated
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return (
    <section className="auth">
      <div className="signup">
        <h1 className="signup__title">SignUp</h1>

        {transition((style, item) =>
          item ? (
            <animated.form
              style={style}
              className="signup__form form"
              onSubmit={signUp}
            >
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Enter a name"
              />
              <input
                className="form__input"
                type="text"
                name="contact"
                placeholder="Enter a number/email"
              />
              <label className="form__label">Add image</label>
              <input
                className="form__input form__input--padding"
                type="file"
                name="image"
                id="image"
                accept=".jpeg, .jpg, .png"
                onChange={handleImage}
                placeholder="Choose a display picture"
              ></input>
              <input
                className="form__input"
                type="text"
                name="username"
                placeholder="Enter a username"
              />
              <input
                className="form__input"
                type="password"
                name="password"
                autoComplete="true"
                placeholder="Enter a password"
              />
              <button className="form__button" type="submit">
                Signup
              </button>
              <p onClick={registered} className="form__redirect">
                Already have an account? Log in here
              </p>
            </animated.form>
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
}

export default Signup;
