import React, {FunctionComponent} from 'react'
import Recommandation from '../../components/Recommandation/Recommendation';
import styles from './recommendations.module.scss';

const Recommendations: FunctionComponent = () => {
  return (
    <div className={styles.recommendationsContainer}>
     <div className={styles.containerP_user}>
      <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={60} className={styles.containerP_image} />

      <div className={styles.containerP_userDetails}>
         <p className={styles.containerP_username}>abigailsmith.mobbin</p>
         <p className={styles.containerP_details}>Popular on twitter</p>
      </div>
      <div className={styles.containerP_logout}>
        <button>Switch</button>
      </div>
     </div>
     <div className={styles.recommendationList}>
        <div className={styles.recommendationListTitle}>
          <p style={{color: 'gray', fontSize: '15px'}}>Suggestions for you</p>
          <p style={{color: 'black', fontSize: '15px'}}>See All</p>
          </div>
          <Recommandation/>
          <Recommandation/>
          <Recommandation/>
          <Recommandation/>
          <Recommandation/>
        
     </div>
     <div className={styles.recommendationFooter}>
       <div className={styles.recommendationTopFooter}>
        <p style={{fontSize: '12px'}}>About.Help.Press.API.Jobs.Privacy.Terms.Locations.Language</p>
        <p style={{fontSize: '15px'}}>© 2023 INSTAGRAM FROM CYRIL</p>
       </div>
     </div>
    </div>
  )
}

export default Recommendations