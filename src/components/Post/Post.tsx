import { useEffect, useState } from "react";
import IndividualPost from "../IndividualPost/IndividualPost";
import Scroller from "../Scroller/Scroller";
import classes from "./post.module.css";
import axios from "axios";

function Post() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    getFollowers();
  }, []);

  const getFollowers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/fetchfollowersposts",
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <Scroller />
      <div>
        {posts.map((item: any) => {
          return (
            <IndividualPost
              id={item._id}
              key={item._id}
              postImg={item.image}
              title={item.title}
              user={item.user}
              like={item.likes}
              comment={item.comments}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Post;
