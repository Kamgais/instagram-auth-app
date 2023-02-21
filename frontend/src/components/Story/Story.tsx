import React, {FunctionComponent} from 'react'
import styles from './story.module.scss';

const Story: FunctionComponent = () => {
  return (
    <div className={styles.storyWrapper}>
    <div className={styles.storyContainer}>
        <img src='https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className={styles.storyImage}/>
        
    </div>
    <div className={styles.storyName}>henribart</div>
    </div>
  )
}

export default Story