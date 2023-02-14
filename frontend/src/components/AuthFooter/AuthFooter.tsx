import React, {FunctionComponent} from 'react'
import {FaAngleDown} from 'react-icons/fa';
import styles from './authFooter.module.scss'

const AuthFooter: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.top}>
            <div className={styles.topItem} >Meta</div>
            <div className={styles.topItem}>About</div>
            <div className={styles.topItem}>Blog</div>
            <div className={styles.topItem}>Jobs</div>
            <div className={styles.topItem}>Help</div>
            <div className={styles.topItem}>API</div>
            <div className={styles.topItem}>Privacy</div>
            <div className={styles.topItem}>Terms and Imprint</div>
            <div className={styles.topItem}>NetzDG/UrhDaG/Ranking of Content</div>
            <div className={styles.topItem}>Top Accounts</div>
            <div className={styles.topItem}>Locations</div>
            <div className={styles.topItem}>Instagram Lite</div>
            <div className={styles.topItem}>Contact Uploading & Non-Users</div>
            <div className={styles.topItem}>Digital Collectibles Privacy Notice</div>
        </div>
        <div className={styles.bottom}>
            <p>English <FaAngleDown/></p>
            <p>© 2023 Instagram from Cyril</p>
        </div>
    </footer>
  )
}

export default AuthFooter