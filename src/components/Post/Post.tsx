import IndividualPost from '../IndividualPost/IndividualPost'
import Scroller from '../Scroller/Scroller'
import classes from './post.module.css'
function Post() {
  return (
    <div className={classes.container}>
        <Scroller/>
        <div>
          <IndividualPost
           profilepic="https://imgd.aeplcdn.com/1280x720/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0"
           profileName='mokkapostu'
           postImg='https://imgd.aeplcdn.com/1280x720/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0'
           />
          <IndividualPost
           profilepic="https://imgd.aeplcdn.com/1280x720/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0"
           profileName='mokkapostu'
           postImg='https://imgd.aeplcdn.com/1280x720/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0'
           />
        </div>
    </div>
  )
}

export default Post