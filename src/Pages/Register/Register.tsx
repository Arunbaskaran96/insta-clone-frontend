import { Link } from "react-router-dom";
import classes from "./Registrer.module.css";
import { useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import axios from "axios";

function Register() {
  const name = useRef<null | HTMLInputElement>(null);
  const email = useRef<null | HTMLInputElement>(null);
  const password = useRef<null | HTMLInputElement>(null);
  const username = useRef<null | HTMLInputElement>(null);
  const [image, setImage] = useState<null | string>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: name.current?.value,
      email: email.current?.value,
      password: password.current?.value,
      username: username.current?.value,
      image: image,
    };
    try {
      await axios.post(
        "https://instaclone-api-3y78.onrender.com/api/signup",
        data
      );
      alert("successfully submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e: any) => {
    const selectedFiles = e.target.files[0];
    if (selectedFiles) {
      const storageRef = firebase.storage().ref();
      const filesRef = storageRef.child(selectedFiles.name);
      filesRef.put(selectedFiles).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          setImage(downloadURL);
        });
      });
    }
  };
  return (
    <div className={classes.conatiner}>
      <div>
        <img
          className={classes.instaLogo}
          src="/assets/instagram-logo.png"
          alt="instagram logo"
        />
      </div>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          ref={name}
          className={classes.input}
        />
        <br />
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className={classes.input}
        />
        <br />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className={classes.input}
        />
        <br />
        <input
          type="text"
          ref={username}
          placeholder="Username"
          className={classes.input}
        />
        <br />
        <input type="file" className={classes.file} onChange={handleImage} />
        <br />
        <input
          type="submit"
          value="Register"
          disabled={image === null}
          className={classes.regBtn}
        />
        <br />
      </form>
      <div className={classes.bottom}>
        <span>Have Account Already ?</span>
        <Link to="/" className={classes.logBtn}>
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Register;
