import React, {FunctionComponent, useState} from 'react'
import styles from './navbar.module.scss';
import InstagramLogo from '../../assets/instagram-text.png';
import { FiSearch } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { BsHeart } from "react-icons/bs"
import IcDrawer from '../IcDrawer/IcDrawer';


const Navbar: FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    const [closeOpen, setCloseOpen] = useState(false)
  
  return (
    <nav className={styles.navbarContainer}>
      
     <div className={styles.navbarLogo}>
     <img src={InstagramLogo} className={styles.navbarImage}/>
     </div>
     <div className={styles.navRightSide}>
        <div className={styles.navSearchFeld}>
            <div className={styles.navSearchIcon}>
            <FiSearch/>
            </div>
        
        <input type="text" placeholder='Suchen' className={styles.navSearchInput} onFocus={() => setVisible(true) } onBlur={() => setVisible(false)}/>
        <div className={styles.navCloseIcon} onClick={() => setVisible(false)}>
        { visible &&
             <IoIosCloseCircle/> 
        }  
        </div>
        
        </div>
        <BsHeart/>
       { visible &&
        <div className={styles.navResultSearch}>
        <h3 className={styles.navResultTitle}>Results</h3>
    </div>
       } 
     </div>
    </nav>
  )
}

export default Navbar