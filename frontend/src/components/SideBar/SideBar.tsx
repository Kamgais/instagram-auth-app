import React, {FunctionComponent, useState, useEffect, useRef} from 'react'
import styles from './sideBar.module.scss'
import InstagramLogo from '../../assets/instagram-text.png'
import { topBarItems } from '../../utils/topBarItems'
import {CgDetailsMore} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import IcDrawer from '../IcDrawer/IcDrawer'



const SideBar: FunctionComponent = () => {
    const location = useLocation()
    console.log(location.pathname.split('/').slice(2).join('/'))
    const navigate = useNavigate();
    const [items, setItems] = useState(topBarItems);
    const [searchDrawer , setSearchDrawer] = useState<boolean>(false)
    const [notifDrawer, setNotifDrawer] = useState<boolean>(false)
    const sideBarContainerRef = useRef<HTMLElement|null>(null);
    const moreButtonRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        const updatedItems = items.map((item) => (
            item.direction === location.pathname.split('/').slice(2).join('/') ? {...item, focus: true} : {...item, focus: false}
        ))
        setItems(updatedItems)
    },[])


    useEffect(() => {
        if(searchDrawer || notifDrawer) {
            sideBarContainerRef.current?.classList.add(styles.drawerOpened)
            moreButtonRef.current?.classList.add(styles.moreButtonOpened)
        } else {
            sideBarContainerRef.current?.classList.remove(styles.drawerOpened)
            moreButtonRef.current?.classList.remove(styles.moreButtonOpened)
        }
    },[searchDrawer, notifDrawer])

   const closeAllDrawer = (e: any) => {
    if(e.target.parentNode.parentNode !== sideBarContainerRef.current && e.target.parentNode.parentNode.parentNode !== sideBarContainerRef.current) {
        setNotifDrawer(false)
        setSearchDrawer(false)
    }  
    
    
    
   }
    useEffect(() => {
        window.addEventListener('click', closeAllDrawer)

        return () => {
            window.removeEventListener('click', closeAllDrawer)
        }
    },[])

    const handleClick = (url: string = '', focusedIndex: number, toolTipText: string) => {
        if(url !== '') {
        setFocused(focusedIndex)
        navigate(url)
        setSearchDrawer(false)
        setNotifDrawer(false)
        } else {
            toggleDrawer(toolTipText)
            setFocused(focusedIndex)
        }
       
    }




    const setFocused = (focusedIndex: number) => {
        const updatedItems = items.map((item, index) => (
            index === focusedIndex ? {...item, focus: true} : {...item, focus: false}
        ))
        setItems(updatedItems)
    }

  


    const toggleDrawer = (openable: string) => {
     switch(openable) {
        case 'search': setNotifDrawer(false); setSearchDrawer((drawer) => !drawer ); break;
        case 'notifications' : setSearchDrawer(false); setNotifDrawer((drawer) => !drawer); break;
        default: return ;
     }
    }




  return (
    <nav className={styles.sideBarContainer} ref={sideBarContainerRef} >
        <IcDrawer title='Search' opened={searchDrawer}/>
        <IcDrawer title='Notifications' opened={notifDrawer}/>
        <img src={InstagramLogo} className={styles.sideBarLogo}/>
       <ul className={styles.links}>
            {
               items.map((tbi: any, index) => (
                    <li className={styles.linkItem} key={tbi.id} id={tbi.name} onClick={tbi.direction? () => handleClick(tbi.direction, index, tbi.toolTipText) : () => handleClick(undefined, index, tbi.toolTipText )}>
                    { !tbi.focus ?
                        <tbi.icon/> :
                        <tbi.iconOnFocus/>
                    }
                    <a className={styles.linkItemText}>{tbi.name}</a>
                    </li>
                ))
            }
       </ul>
       <div className={styles.moreButton} ref={moreButtonRef}>
        <CgDetailsMore/>
        <p className={styles.moreButtonText}>More</p>
       </div>
    </nav>
  )
}

export default SideBar