import React, {FunctionComponent} from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import HomePage from '../HomePage/HomePage';
import styles from './appContainer.module.scss';

const AppContainer: FunctionComponent = () => {
  return (
    <div className={styles.appContainer}>
  
        <SideBar/>
        <div className={styles.contentContainer}>
        <Outlet/>
        </div>
       
    </div>
  )
}

export default AppContainer