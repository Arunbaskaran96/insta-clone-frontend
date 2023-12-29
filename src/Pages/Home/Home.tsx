import Post from '../../components/Post/Post'
import Suggestion from '../../components/Suggestion/Suggestion'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './home.module.css'
function Home() {
  return (
    <div className={classes.container}>
        <Sidebar/>
        <Post/>
        <Suggestion/>
    </div>
  )
}

export default Home