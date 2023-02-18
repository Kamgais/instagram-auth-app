import React, {FunctionComponent, useState, useEffect} from 'react'
import styles from './sideBar.module.scss'
import InstagramLogo from '../../assets/instagram-text.png'
import { topBarItems } from '../../utils/topBarItems'
import {CgDetailsMore} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



const SideBar: FunctionComponent = () => {
    const location = useLocation()
    console.log(location.pathname.split('/').slice(2).join('/'))
    const navigate = useNavigate();
    const [items, setItems] = useState(topBarItems);

    useEffect(() => {
        const updatedItems = items.map((item) => (
            item.direction === location.pathname.split('/').slice(2).join('/') ? {...item, focus: true} : {...item, focus: false}
        ))
        setItems(updatedItems)
    },[])

    const handleClick = (url: string, focusedIndex: number) => {
       setFocused(focusedIndex)
        navigate(url)
    }




    const setFocused = (focusedIndex: number) => {
        const updatedItems = items.map((item, index) => (
            index === focusedIndex ? {...item, focus: true} : {...item, focus: false}
        ))
        setItems(updatedItems)
    }

  return (
    <nav className={styles.sideBarContainer}>
        <img src={InstagramLogo} className={styles.sideBarLogo}/>
       <ul className={styles.links}>
            {
               items.map((tbi: any, index) => (
                    <li className={styles.linkItem} key={tbi.id} onClick={tbi.direction? () => handleClick(tbi.direction, index) : () => {setFocused(index)}}>
                    { !tbi.focus ?
                        <tbi.icon/> :
                        <tbi.iconOnFocus/>
                    }
                    <a className={styles.linkItemText}>{tbi.name}</a>
                    </li>
                ))
            }
       </ul>
       <div className={styles.moreButton}>
        <CgDetailsMore/>
        <p className={styles.moreButtonText}>More</p>
       </div>
    </nav>
  )
}

export default SideBar