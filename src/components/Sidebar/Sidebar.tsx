import SidebarContent from "../SidebarContent/SidebarContent";
import classes from "./sidebar.module.css";
function Sidebar(props: any) {
  const { minimise } = props;
  return (
    <div className={classes.container}>
      <div>
        {minimise ? (
          <img
            className={classes.itemImg}
            src="/assets/instsmini.png"
            alt="instalog"
          />
        ) : (
          <img
            className={classes.logo}
            src="/assets/instagram-logo.png"
            alt="instalog"
          />
        )}
      </div>
      <div>
        <SidebarContent minimise={minimise} />
      </div>
    </div>
  );
}

export default Sidebar;
