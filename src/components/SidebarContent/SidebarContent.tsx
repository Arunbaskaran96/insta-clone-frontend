import classes from './sidebarcontent.module.css'
function SidebarContent() {
  return (
    <ul className={classes.container}>
        <li className={classes.item}>
            <>
            <img className={classes.itemImg} src='/assets/home-icon.png'/>
            <span className={classes.contentText}>Home</span>
            </>
        </li>
        <li className={classes.item}>
            <>
            <img className={classes.itemImg} src='/assets/search-icon.png'/>
            <span className={classes.contentText}>Search</span>
            </>           
        </li>
        <li className={classes.item}>
            <>
            <img className={classes.itemImg} src='/assets/message-lcon.png'/>
            <span className={classes.contentText}>Message</span>
            </> 
        </li>
        <li className={classes.item}>
            <>
            <img className={classes.itemImg} src='/assets/profile-icon.png'/>
            <span className={classes.contentText}>Profile</span>
            </>           
        </li>
    </ul>
  )
}

export default SidebarContent