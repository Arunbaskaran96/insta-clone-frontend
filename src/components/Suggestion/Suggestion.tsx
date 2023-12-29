import XAvatar from "../Avatar/Avatar";
import classes from "./suggestion.module.css";
function Suggestion() {
  return (
    <div className={classes.container}>
      <div className={classes.profileContainer}>
        <div style={{ display: "flex" }}>
          <XAvatar
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            radius="sm"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              justifyContent: "flex-start",
            }}
          >
            <span className={classes.profile_Name}>Arun_Dhilla</span>
            <span className={classes.instaName}>arun</span>
          </div>
        </div>
        <div>
          <span className={classes.follow}>Switch</span>
        </div>
      </div>
      <div>
        <p className={classes.text}>Suggestion for you</p>
        <div className={classes.lists}>
          <div className={classes.list}>
            <XAvatar
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              radius="sm"
            />
            <span className={classes.profileName}>vijayakanth</span>
          </div>
          <span className={classes.follow}>Follow</span>
          <div></div>
        </div>
        <div className={classes.lists}>
          <div className={classes.list}>
            <XAvatar
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              radius="sm"
            />
            <span className={classes.profileName}>vijayakanth</span>
          </div>
          <span className={classes.follow}>Follow</span>
          <div></div>
        </div>
        <div className={classes.lists}>
          <div className={classes.list}>
            <XAvatar
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              radius="sm"
            />
            <span className={classes.profileName}>vijayakanth</span>
          </div>
          <span className={classes.follow}>Follow</span>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
