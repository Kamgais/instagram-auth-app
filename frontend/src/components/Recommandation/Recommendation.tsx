import React, {FunctionComponent} from 'react'
import styles from './recommendation.module.scss'

const Recommandation: FunctionComponent = () => {
  return (
    <div className={styles.recommandationContainer}>
      <div className={styles.recommandationImage}>
        <img src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} className={styles.currentImage}/>
        </div>
        <div className={styles.recommendationUserDetails}>
          <p className={styles.recommendationUsername}>death_sasuke69</p>
          <p className={styles.recommendationDetails}>Followed by plaza_audrey</p>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <button className={styles.recommendationFollowButton}>Follow</button>
        </div>
    </div>
  )
}

export default Recommandation