import { useDisclosure } from "@mantine/hooks";
import XAvatar from "../Avatar/Avatar";
import classes from "./individualpost.module.css";
import XModal from "../Modal/Modal";
import Comment from "../CommentSection/Comment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

interface IndividualPostProps {
  postImg: string;
  title?: string;
  like?: any;
  user?: any;
  comment?: Array<any>;
  id: string;
  item: any;
}
function IndividualPost(props: IndividualPostProps) {
  const userDetails = useSelector((state: any) => {
    return state.User.user;
  });
  const { postImg, title, user, like, comment, id, item } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [likeCount, setLikeCount] = useState<any>(like.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = async () => {
    try {
      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
      setIsLiked(!isLiked);
      await axios.put(
        `http://localhost:8000/api/${id}/like`,
        { id: userDetails._id },
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLiked(like.includes(userDetails._id));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <XAvatar src={user.image} radius="sm" />
        <span className={classes.profileName}>
          {user.name}{" "}
          <span style={{ color: "gray", fontSize: "12px" }}> 32m Ago</span>
        </span>
      </div>
      <div className={classes.middle}>
        <img className={classes.post} src={postImg} alt="post" />
      </div>
      <div className={classes.footer}>
        <XModal opened={opened} close={close}>
          <div className={classes.modal}>
            <img className={classes.imgPost} src={postImg} alt="post" />
            <Comment
              user={user}
              like={likeCount}
              comment={comment}
              id={id}
              item={item}
            />
          </div>
        </XModal>
        {isLiked ? (
          <img
            className={classes.footerIcon}
            onClick={likeHandler}
            src="/assets/likered.png"
            alt="like-icon"
          />
        ) : (
          <img
            className={classes.footerIcon}
            onClick={likeHandler}
            src="/assets/like-icon.png"
            alt="like-icon"
          />
        )}
        <img
          className={classes.footerIcon}
          onClick={open}
          src="/assets/comment-icon.png"
          alt="comment-icon"
        />
      </div>
      <>
        <span style={{ marginLeft: "10px" }}>{likeCount} likes</span>
      </>
      <div style={{ display: "flex" }} className={classes.description}>
        <div className={classes.profileName}>{user.name}</div>
        <span className={classes.descriptionText}>{title}</span>
      </div>
    </div>
  );
}

export default IndividualPost;
