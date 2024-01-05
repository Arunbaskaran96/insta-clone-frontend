import { TextInput } from "@mantine/core";
import XAvatar from "../Avatar/Avatar";
import classes from "./comment.module.css";
import CommentList from "../CommentsList/CommentList";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addComment, addPost } from "../../Redux/Reducers/PostSlice";

interface commentProps {
  like: any;
  comment: any;
  user: any;
  id: string;
  item: any;
}
function Comment(props: commentProps) {
  const { like, user, id, item } = props;
  const postDispatch = useDispatch();
  const commentRef = useRef<any>(null);

  const userDetails = useSelector((state: any) => {
    return state.User.user;
  });

  const postDetails = useSelector((state: any) => {
    return state.Post.post;
  });

  useEffect(() => {
    postDispatch(addPost(item));
  }, []);

  const commentHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data = {
        comment: commentRef.current?.value,
        user: userDetails._id,
      };
      await axios.put(`http://localhost:8000/api/${id}/comment`, data);
      postDispatch(addComment(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <XAvatar src={user.image} radius="xs" />
        <span className={classes.text}>{user.name}</span>
      </div>
      <div className={classes.middle}>
        {postDetails?.comments?.map((item: any) => {
          return <CommentList key={item._id} comment={item} />;
        })}
      </div>
      <div className={classes.bottom}>
        <p style={{ fontSize: "18px", fontWeight: 600 }}>{like} Likes</p>

        <form onSubmit={commentHandler}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              ref={commentRef}
              styles={{
                input: {
                  height: "50px",
                  width: "400px",
                },
                label: {
                  fontSize: "40px",
                },
              }}
              placeholder="Add a comment..."
            />
            <button className={classes.postBtn}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
