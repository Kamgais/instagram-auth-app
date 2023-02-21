import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import StoryFeed from '../../components/StoryFeed/StoryFeed'
import Recommendations from '../../layouts/Recommandations/Recommendations'
import styles from './home.module.scss'


const HomePage = () => {

    
  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      <div className={styles.homeContainerLeft}>
      <StoryFeed/>
      </div>
      <div className={styles.homeContainerRight}>
      <Recommendations/>
      </div>
      
    </div>
  )
}

export default HomePage