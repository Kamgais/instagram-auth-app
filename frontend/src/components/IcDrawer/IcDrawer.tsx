import React, { FunctionComponent, useEffect, useRef } from "react";
import styles from "./drawer.module.scss";
import { FiSearch } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io"; 

type DrawerProps = {
  title: string;
  opened: boolean;
};

const IcDrawer: FunctionComponent<DrawerProps> = ({ title, opened }) => {
 // const [opened, setOpened] = useState<boolean>(false);
 const containerRef = useRef<HTMLDivElement|null>(null);

 useEffect(() => {
  if(opened) {
    containerRef.current!.style.transform = 'translateX(0)'
  } else {
    containerRef.current!.style.transform = 'translateX(-150%)'
  }
 }, [opened])

  return (
    <div className={styles.drawerContainer} ref={containerRef}>
      <div className={styles.drawerHeader}>
        <div className={styles.drawerTitle}>
          <h1>{title}</h1>
        </div>
        {  title === 'Search' &&
            <div  className={styles.drawerSearchFeld}>
                <div className={styles.drawerSearchIcon}>
                  <FiSearch/>
                </div>
                <input type='text'  placeholder="Search" className={styles.drawerSearchInput}/>
                <div className={styles.drawerCloseButton}>
                <IoIosCloseCircle/> 
                </div>
            </div>
        }
      </div>

      <div className={styles.drawerContent}>

      </div>
    </div>
  );
};

export default IcDrawer;
