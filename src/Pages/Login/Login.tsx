import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Reducers/UserSlice";

function Login() {
  const email = useRef<null | HTMLInputElement>(null);
  const password = useRef<null | HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userData = {
      email: email.current?.value,
      password: password.current?.value,
    };
    const { data } = await axios.post(
      "https://instaclone-api-3y78.onrender.com/api/login",
      userData
    );
    window.localStorage.setItem("token", data.token);
    dispatch(addUser(data));
    navigate("/home");
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <div>
          <img
            className={classes.imgleft}
            src="/assets/instalogin.jpg"
            alt="image"
          />
        </div>
      </div>
      <div className={classes.rightSide}>
        <div
          style={{
            border: "1px solid black",
            marginRight: "200px",
            textAlign: "center",
            padding: "10px 0px",
            marginBottom: "15px",
          }}
        >
          <>
            <img
              className={classes.instaLogo}
              src="/assets/instagram-logo.png"
              alt="instagram logo"
            />
            <br />
          </>
          <form onSubmit={handleSubmit}>
            <input
              ref={email}
              className={classes.input}
              placeholder="Enter your username"
              type="email"
            />
            <br />
            <input
              ref={password}
              className={classes.input}
              placeholder="Enter your password"
              type="password"
              name="password"
            />
            <br />
            <input className={classes.btn} type="submit" value="Sign in" />{" "}
            <br />
          </form>
        </div>
        <div
          style={{
            border: "1px solid black",
            marginRight: "200px",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          <Link to="/register" className={classes.regBtn}>
            Sign up
          </Link>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Login;
