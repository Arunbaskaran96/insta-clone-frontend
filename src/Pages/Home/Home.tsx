import Post from "../../components/Post/Post";
import Suggestion from "../../components/Suggestion/Suggestion";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./home.module.css";
import { MantineProvider } from "@mantine/core";
function Home() {
  return (
    <div className={classes.container}>
      <MantineProvider>
        <Sidebar />
        <Post />
        <Suggestion />
      </MantineProvider>
    </div>
  );
}

export default Home;
