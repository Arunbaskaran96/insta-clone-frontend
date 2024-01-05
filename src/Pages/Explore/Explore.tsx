import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./explore.module.css";
import axios from "axios";

function Explore() {
  const [fetchAllPosts, setFetchAllPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://instaclone-api-3y78.onrender.com/api/allposts",
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setFetchAllPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div style={{ width: "300px" }}>
        <Sidebar />
      </div>
      <div className={classes.imageContainer}>
        {fetchAllPosts.map((item: any) => {
          return (
            <div>
              <img className={classes.postImg} src={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
