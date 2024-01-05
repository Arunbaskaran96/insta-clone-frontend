import { useEffect, useState } from "react";
import XAvatar from "../Avatar/Avatar";
import classes from "./chat.module.css";
import axios from "axios";
function Chat(props: any) {
  const { own, item } = props;
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `https://instaclone-api-3y78.onrender.com/api/user/${item.senderId}`,
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={own ? classes.ownmsgContainer : classes.msgContainer}>
      <XAvatar src={user.image} radius="xs" />
      <span className={classes.msgText}>{item.message}</span>
    </div>
  );
}

export default Chat;
