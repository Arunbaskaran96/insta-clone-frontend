import SidebarContent from '../SidebarContent/SidebarContent'
import classes from './sidebar.module.css'
function Sidebar() {
  return (
    <div className={classes.container}>
        <div>
            <img className={classes.logo} src='/assets/instagram-logo.png' alt='instalog'/>
        </div>
        <div>
            <SidebarContent/>
        </div>
    </div>
  )
}

export default Sidebar