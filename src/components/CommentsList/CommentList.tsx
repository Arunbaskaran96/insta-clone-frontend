import { useEffect, useState } from "react";
import XAvatar from "../Avatar/Avatar";
import classes from "./comment.module.css";
import axios from "axios";

interface commentListProps {
  comment: any;
}
function CommentList(props: commentListProps) {
  const { comment } = props;
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `https://instaclone-api-3y78.onrender.com/api/user/${comment.user}`,
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <XAvatar src={user.image} radius="xs" />
      <div className={classes.profileName}>{user.name}</div>
      <span style={{ marginLeft: "20px" }}>{comment.comment}</span>
    </div>
  );
}

export default CommentList;
