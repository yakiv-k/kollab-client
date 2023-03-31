import { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./Login.scss";

function Login({ login, loginError, error }) {
  // React spring animated
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return (
    <section className="auth">
      <div className="login">
        <h1 className="login__title">Login</h1>
        {loginError && <label style={{ color: "red" }}>{error}</label>}

        {transition((style, item) =>
          item ? (
            <animated.form style={style} className="login__form form " onSubmit={login}>
              <label className="form__label">Username:</label>
              <input className="form__input" type="text" name="username" />
              <label className="form__label">Password:</label>
              <input className="form__input" type="password" name="password" />
              <button className="form__button" type="submit">
                Login
              </button>
              <div className="form_guest guest">
                <p className="guest__title">Guest Login:</p>
                <p className="guest__text">username: yakiv.yyz@gmail.com</p>
                <p className="guest__text">password: password</p>
              </div>
            </animated.form>
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
}

export default Login;
