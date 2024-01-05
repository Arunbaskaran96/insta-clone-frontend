import { useEffect, useRef, useState } from "react";
import XAvatar from "../../components/Avatar/Avatar";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./message.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMsg, addNewMsg } from "../../Redux/Reducers/MessageSlice";
import { io } from "socket.io-client";
function Message() {
  const [friends, setFriends] = useState([]);
  const text = useRef<null | HTMLInputElement>(null);
  const msgDispatch = useDispatch();
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [arrMsg, setArrMsg] = useState<any>([]);
  const scrollref = useRef<any>(null);
  const socketRef = useRef<any>(null);

  const messages = useSelector((state: any) => {
    return state.Message.data;
  });
  const user = useSelector((state: any) => {
    return state.User.user;
  });

  useEffect(() => {
    scrollref.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  useEffect(() => {
    socketRef.current = io("https://insta-socket.onrender.com/");
  }, [arrMsg]);

  useEffect(() => {
    socketRef.current.emit("addUser", user._id);
  }, []);

  useEffect(() => {
    socketRef.current?.on("getMsg", (item: any) => {
      setArrMsg((prev: any) => [...prev, item]);
      msgDispatch(addNewMsg(item));
    });
  }, []);

  useEffect(() => {
    getFriends();
  }, [arrMsg]);

  const getFriends = async () => {
    try {
      const { data } = await axios.get(
        "https://instaclone-api-3y78.onrender.com/api/getfriends",
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setFriends(data);
    } catch (error) {
      console.log(error);
    }
  };
  const friendMsgHandler = async (item: any) => {
    try {
      setCurrentChat(item);
      const { data } = await axios.get(
        `https://instaclone-api-3y78.onrender.com/api/getmsg/${item._id}`,
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setArrMsg(data);
      msgDispatch(addMsg(data));
    } catch (error) {
      console.log(error);
    }
  };

  const formHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data = {
        senderId: user._id,
        receiverId: currentChat._id,
        message: text.current?.value,
      };
      socketRef.current?.emit("sendMsg", data);
      msgDispatch(addNewMsg(data));
      setArrMsg((prev: any) => [...prev, data]);
      await axios.post(
        "https://instaclone-api-3y78.onrender.com/api/newmsg",
        data,
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div style={{ width: "130px" }}>
        <Sidebar minimise />
      </div>
      <div className={classes.friends}>
        <div className={classes.text}>Messages</div>
        <div className={classes.friendsList}>
          {friends.map((item: any) => {
            return (
              <div
                className={classes.friend}
                onClick={() => friendMsgHandler(item)}
              >
                <XAvatar src={item.image} radius="def" />
                <span className={classes.name}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.message}>
        {currentChat != null ? (
          <div className={classes.messageminicontainer}>
            <div className={classes.top}>
              <div className={classes.profileContainer}>
                <XAvatar src={currentChat.image} radius="sm" />
                <div className={classes.name}>{currentChat.name}</div>
              </div>
            </div>
            <div className={classes.middle}>
              {messages.length ? (
                messages.map((item: any) => {
                  return (
                    <div ref={scrollref}>
                      {" "}
                      <Chat item={item} own={item.senderId === user._id} />
                    </div>
                  );
                })
              ) : (
                <div className={classes.nomessage}>no conversation started</div>
              )}
            </div>
            <form className={classes.bottom} onSubmit={formHandler}>
              <input ref={text} type="text" className={classes.input} />
              <button className={classes.btn}>Send</button>
            </form>
          </div>
        ) : (
          <div className={classes.noConversation}>
            Open a conversation to start
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
