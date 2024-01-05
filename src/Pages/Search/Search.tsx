import { Drawer } from "@mantine/core";
import classes from "./search.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import XAvatar from "../../components/Avatar/Avatar";
// import { useSelector } from "react-redux";
import "@mantine/core/styles.layer.css";
import { Link } from "react-router-dom";
function Search(props: any) {
  const { minimise } = props;
  // const userDetails = useSelector((state: any) => {
  //   return state.User.user;
  // });
  const [opened, { open, close }] = useDisclosure(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/getallusers",
        {
          headers: { Authorization: `${window.localStorage.getItem("token")}` },
        }
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={open}>
      <>
        <img className={classes.itemImg} src="/assets/search-icon.png" />
        <span
          className={minimise ? classes.contentTextNone : classes.contentText}
        >
          Search
        </span>
      </>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        title="Search"
      >
        <div style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}>
          <input className={classes.input} placeholder="Search" />
        </div>
        <div>
          <p style={{ fontSize: "20px", margin: "0px" }}>Results</p>
          {users.map((item: any) => {
            return (
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0px 0px 10px",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                }}
                className={classes.bottomContainer}
                to={`/profile/${item._id}`}
              >
                <div>
                  <XAvatar src={item.image} radius="sm" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                  className={classes.text}
                >
                  <span style={{ width: "100px" }}>{item.name} </span>
                  <span style={{ marginLeft: "15px" }}>
                    {" "}
                    {item.followers.length} followers
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
}

export default Search;
