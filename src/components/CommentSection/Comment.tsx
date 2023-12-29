import { TextInput } from '@mantine/core'
import XAvatar from '../Avatar/Avatar'
import classes from './comment.module.css'
function Comment() {
  return (
    <div className={classes.container}>
        <div className={classes.top}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <span className={classes.text}>Vijayakanth</span>
        </div>
        <div className={classes.middle}>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <XAvatar src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' radius='xs'/>
            <p className={classes.profileName}>Ajith</p>
            <span style={{marginLeft:'20px'}}>New songs enna mayiraatum irukku nu,intha kutty kunjans old songs ah thappa pesuranunga</span>
            </div>
        </div>
        <div className={classes.bottom}>
          <p style={{fontSize:"18px",fontWeight:600}}>2000 Likes</p>
        <TextInput
        styles={{
          input:{
            height:'60px',
            width:'100%'
          },
          label:{
            fontSize:"40px"
          }
        }}
          placeholder="Add a comment..."
        />
        </div>
    </div>
  )
}

export default Comment