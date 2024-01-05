import { useSelector } from "react-redux";
import XAvatar from "../../components/Avatar/Avatar";
import classes from "./profile.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [posts, setPost] = useState([]);
  const userDetails = useSelector((state: any) => {
    return state.User.user;
  });

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        `https://instaclone-api-3y78.onrender.com/api/fetchuserpost/${userDetails._id}`,
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div style={{ width: "300px" }}>
        <Sidebar />
      </div>
      <div style={{ width: "100%" }}>
        <div className={classes.top}>
          <div className={classes.topLeft}>
            <XAvatar src={userDetails.image} radius="lg" />
          </div>
          <div className={classes.topRight}>
            <div style={{ marginTop: "40px" }}>
              <span className={classes.name}>Arun</span>
              <button className={classes.editBtn}>Edit profile</button>
              <div style={{ marginTop: "10px" }}>
                <span className={classes.postCount}>{posts?.length} posts</span>
                <span className={classes.followersCount}>
                  {userDetails?.followers?.length} followers
                </span>
                <span className={classes.followingsCount}>
                  {userDetails?.followings?.length} followings
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.postContainer}>
          {posts.map((item: any) => {
            return <img className={classes.img} src={item.image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
