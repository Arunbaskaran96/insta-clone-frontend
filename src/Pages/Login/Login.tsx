import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {
      // let errors = {};
      // if (!value.email) {
      //   errors.email = "Please Enter Your Email";
      // }
      // if (!value.password) {
      //   errors.password = "Please Enter Your Password";
      // }
      // return errors;
    },
    onSubmit: async (value) => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/login",
          value
        );
        window.localStorage.setItem("token", data.token);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <input
              value={formik.values.email}
              className={classes.input}
              placeholder="Enter your username"
              type="email"
              onChange={formik.handleChange}
              name="email"
            />
            <br />
            <input
              value={formik.values.password}
              className={classes.input}
              placeholder="Enter your password"
              type="password"
              onChange={formik.handleChange}
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
