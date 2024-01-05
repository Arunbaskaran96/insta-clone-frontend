import { useDispatch, useSelector } from "react-redux";
import XAvatar from "../Avatar/Avatar";
import classes from "./suggestion.module.css";
import { addUser } from "../../Redux/Reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Suggestion() {
  const [suggestionList, setSuggestionList] = useState([]);

  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const user = useSelector((state: any) => {
    return state.User.user;
  });

  console.log(user);
  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    userDispatch(addUser({}));
    navigate("/");
  };

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    try {
      const { data } = await axios.get(
        "https://instaclone-api-3y78.onrender.com/api/getallusers",
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setSuggestionList(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.profileContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <XAvatar src={user.image} radius="sm" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              justifyContent: "flex-start",
            }}
          >
            <span className={classes.profile_Name}>{user.name}</span>
            <span className={classes.instaName}>{user.username}</span>
          </div>
        </div>
        <>
          <span onClick={logoutHandler} className={classes.logout}>
            Log out
          </span>
        </>
      </div>
      <div>
        <p className={classes.text}>Suggestion for you</p>
        {suggestionList.map((item: any) => {
          return (
            <div className={classes.lists}>
              <div className={classes.list}>
                <XAvatar src={item.image} radius="sm" />
                <span className={classes.profileName}>{item.name}</span>
              </div>
              <span className={classes.follow}>Follow</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
