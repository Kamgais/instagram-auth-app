import React, {FunctionComponent, useState, useRef, useEffect} from 'react'
import Story from '../Story/Story'
import styles from  './feed.module.scss'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'


const StoryFeed: FunctionComponent = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [move,setMove] = useState(0);
    const leftButton = useRef<HTMLDivElement| null>(null);
    const rightButton = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
     if(scrollPosition === 2) {
        rightButton.current!.style.display = 'none'
     } else if(scrollPosition === 0) {
        leftButton.current!.style.display = 'none'
     } else {
        rightButton.current!.style.display = 'block'; 
        leftButton.current!.style.display = 'block'; 
     }
    }, [scrollPosition])


    const scrollToLeft = () => {
        setMove((p) => p+=100)
        setScrollPosition(pos => pos-1)
    }

    const scrollToRight = () => {
        setMove((p) => p-=100) 
        setScrollPosition(pos => pos+1)
    }
    
    
  
  return (
    <div className={styles.storyFeedContainer}>
        
    <div className={styles.storyList} style={{ transform: `translateX(${move}%)`}}>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>

     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     </div>
     <div className={styles.chevronLeft} onClick={scrollToLeft} ref={leftButton}>
        <FaChevronCircleLeft/>
     </div>
     <div className={styles.chevronRight} onClick={scrollToRight} ref={rightButton}>
        <FaChevronCircleRight/>
     </div>
    </div>
  )
}

export default StoryFeed