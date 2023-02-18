import React, {FunctionComponent, useState, useEffect} from 'react'
import { IconType } from 'react-icons'
import styles from './item.module.scss'
import { useNavigate } from 'react-router-dom'

type TopBarItem = {
    
    id: number,
    name: string,
    icon: IconType,
    iconOnFocus: IconType,
    toolTipText: string,
    direction?: string,
    focus: boolean,
    setUnfocused: (id:number) => void
    }


   










const SideBarItem: FunctionComponent<TopBarItem> = (tbi) => {
    
    const [focused, setFocused] = useState<boolean>(false);

   
    const navigate = useNavigate();
    const handleClick = (url?: string) => {
        setFocused(true)
         navigate(url!)
    }
  return (
    <li className={styles.linkItem} key={tbi.id} onClick={tbi.direction? () => handleClick(tbi.direction) : () => {}}>
        { !focused ?
            <tbi.icon/> :
            <tbi.iconOnFocus/>
        }
        <a className={styles.linkItemText}>{tbi.name}</a>
        </li>
  )
}

export default SideBarItem