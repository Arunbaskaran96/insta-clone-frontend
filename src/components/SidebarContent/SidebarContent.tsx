import { useDisclosure } from "@mantine/hooks";
import classes from "./sidebarcontent.module.css";
import XModal from "../Modal/Modal";
import { useRef, useState } from "react";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Search from "../../Pages/Search/Search";

function SidebarContent(props: any) {
  const { minimise } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [image, setImage] = useState<any>(null);
  const [video, setVideo] = useState<any>(null);
  const des = useRef<null | HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      title: des.current?.value,
      image: image,
    };
    try {
      await axios.post("http://localhost:8000/api/addpost", data, {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      });
      alert("posted sucessfully");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit1 = async (e: any) => {
    e.preventDefault();
    const data = {
      title: des.current?.value,
      video: video,
    };
    try {
      await axios.post("http://localhost:8000/api/addpost", data, {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      });
      alert("posted sucessfully");
      setImage(null);
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

  const handleVideo = (e: any) => {
    const selectedFiles = e.target.files[0];
    if (selectedFiles) {
      const storageRef = firebase.storage().ref();
      const filesRef = storageRef.child(selectedFiles.name);
      filesRef.put(selectedFiles).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          setVideo(downloadURL);
        });
      });
    }
  };

  return (
    <ul className={classes.container}>
      <Link className={classes.item} to="/home">
        <>
          <img className={classes.itemImg} src="/assets/home-icon.png" />
          <span
            className={minimise ? classes.contentTextNone : classes.contentText}
          >
            Home
          </span>
        </>
      </Link>
      <li className={classes.item}>
        <Search minimise={minimise} />
      </li>
      <Link className={classes.item} to="/message">
        <>
          <img className={classes.itemImg} src="/assets/message-lcon.png" />
          <span
            className={minimise ? classes.contentTextNone : classes.contentText}
          >
            Message
          </span>
        </>
      </Link>
      <Link className={classes.item} to="/explore">
        <>
          <img className={classes.itemImg} src="/assets/explore.png" />
          <span
            className={minimise ? classes.contentTextNone : classes.contentText}
          >
            Explore
          </span>
        </>
      </Link>
      <Link className={classes.item} to="/profile">
        <>
          <img className={classes.itemImg} src="/assets/profile-icon.png" />
          <span
            className={minimise ? classes.contentTextNone : classes.contentText}
          >
            Profile
          </span>
        </>
      </Link>
      <li className={classes.item}>
        <div onClick={open}>
          <img className={classes.itemImg} src="/assets/create.svg" />
          <span
            className={minimise ? classes.contentTextNone : classes.contentText}
          >
            Create
          </span>
        </div>
      </li>
      <div>
        <XModal opened={opened} close={close} size="md" title="Create new post">
          {image === null && (
            <div className={classes.imageContainer}>
              <div style={{ marginBottom: "10px" }}>
                <label>Upload your image here</label>
                <br />
                <input
                  className={classes.file}
                  onChange={handleImage}
                  type="file"
                />
              </div>
              <div>
                <label>Upload your video here</label>
                <br />
                <input
                  className={classes.file}
                  onChange={handleVideo}
                  type="file"
                />
              </div>
            </div>
          )}
          {image != null && video === null && (
            <form onSubmit={handleSubmit}>
              <img src={image} className={classes.postImg} />
              <div className={classes.postContainer}>
                <input
                  ref={des}
                  placeholder="What's on your mind?"
                  className={classes.description}
                  type="text"
                />
                <button className={classes.postBtn}>Post</button>
              </div>
            </form>
          )}
          {image === null && video != null && (
            <form onSubmit={handleSubmit1}>
              <img src={image} className={classes.postImg} />
              <div className={classes.postContainer}>
                <ReactPlayer url={video} />
                <button className={classes.postBtn}>Post</button>
              </div>
            </form>
          )}
        </XModal>
      </div>
    </ul>
  );
}

export default SidebarContent;
