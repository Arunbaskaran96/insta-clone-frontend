import XAvatar from "../../components/Avatar/Avatar";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./userprofile.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../Redux/Reducers/UserSlice";

function UserProfile() {
  const dispatch = useDispatch();
  const params = useParams();
  const [user, setUser] = useState<any>({});
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  const userDetails = useSelector((state: any) => {
    return state.User.user;
  });

  useEffect(() => {
    getUser();
  }, [userDetails]);

  useEffect(() => {
    setIsFollowing(userDetails.followings?.includes(params.id));
  }, []);

  const getUser = async () => {
    try {
      const currentUser = await axios.get(
        `http://localhost:8000/api/user/${params.id}`,
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setUser(currentUser.data);
      if (currentUser) {
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/fetchuserpost/${currentUser.data._id}`,
            {
              headers: {
                Authorization: `${window.localStorage.getItem("token")}`,
              },
            }
          );
          setPosts(data);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const followHandler = async () => {
    if (!isFollowing) {
      await axios.put(
        `http://localhost:8000/api/follow/${user._id}`,
        { id: userDetails._id },
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      dispatch(follow(user._id));
      setIsFollowing(!isFollowing);
    } else {
      await axios.put(
        `http://localhost:8000/api/unfollow/${user._id}`,
        { id: userDetails._id },
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      dispatch(unfollow(user._id));
      setIsFollowing(!isFollowing);
    }
  };
  return (
    <div className={classes.container}>
      <div style={{ width: "280px" }}>
        <Sidebar />
      </div>
      <div className={classes.top}>
        <div style={{ display: "flex", width: "100%" }}>
          <div className={classes.topLeft}>
            <XAvatar src={user.image} radius="lg" />
          </div>
          <div className={classes.topRight}>
            <div>
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                {user.name}
              </span>
              <button className={classes.followBtn} onClick={followHandler}>
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
              <button className={classes.msgBtn}>Message</button>
            </div>
            <div style={{ marginTop: "10px" }}>
              <span className={classes.text}>{posts?.length} posts</span>
              <span className={classes.text}>
                {user.followers?.length} followers
              </span>
              <span className={classes.text}>
                {user.followings?.length} followings
              </span>
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

export default UserProfile;
