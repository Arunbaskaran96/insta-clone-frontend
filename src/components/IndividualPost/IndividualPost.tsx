import { useDisclosure } from "@mantine/hooks";
import XAvatar from "../Avatar/Avatar";
import classes from "./individualpost.module.css";
import XModal from "../Modal/Modal";
import Comment from "../CommentSection/Comment";

interface IndividualPostProps {
  profilepic: string;
  profileName: string;
  postImg: string;
}
function IndividualPost(props: IndividualPostProps) {
  const { profilepic, profileName, postImg } = props;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <XAvatar src={profilepic} radius="sm" />
        <span className={classes.profileName}>
          {profileName}{" "}
          <span style={{ color: "gray", fontSize: "12px" }}> 32m Ago</span>
        </span>
      </div>
      <div className={classes.middle}>
        <img className={classes.post} src={postImg} alt="post" />
      </div>
      <div className={classes.footer}>
        <XModal opened={opened} close={close}>
          <div className={classes.modal}>
            <img
              className={classes.imgPost}
              src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0"
              alt="post"
            />
            <Comment />
          </div>
        </XModal>
        <img
          className={classes.footerIcon}
          onClick={open}
          src="/assets/like-icon.png"
          alt="like-icon"
        />
        <img
          className={classes.footerIcon}
          onClick={open}
          src="/assets/comment-icon.png"
          alt="comment-icon"
        />
      </div>
      <div style={{ display: "flex" }} className={classes.description}>
        <div className={classes.profileName}>Ajith</div>
        <span className={classes.descriptionText}>
          Hey mummy kitchen la enna plants ah vetti knnutu irukiya,Hey mummy
          kitchen la enna plants ah vetti knnutu irukiya,Hey mummy kitchen la
          enna plants ah vetti knnutu irukiya,Hey mummy kitchen la enna plants
          ah vetti knnutu irukiya,Hey mummy kitchen la enna plants ah vetti
          knnutu irukiya,Hey mummy kitchen la enna plants ah vetti knnutu
          irukiya
        </span>
      </div>
    </div>
  );
}

export default IndividualPost;
