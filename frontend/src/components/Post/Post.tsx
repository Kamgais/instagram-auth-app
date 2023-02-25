import React, { FunctionComponent, useState , useRef, useEffect} from "react";
import styles from "./post.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment , FaChevronCircleRight ,  FaChevronCircleLeft  } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdSaveAlt } from "react-icons/md";
import {BsEmojiSmile} from 'react-icons/bs'
import {BiChevronLeftCircle, BiChevronRightCircle} from 'react-icons/bi'


const Post: FunctionComponent = () => {
    const [position, setPosition] = useState(0);
    const [move, setMove] = useState(0)
    const contentRef = useRef<HTMLDivElement|null>(null)
    const toLeftRef = useRef<HTMLDivElement|null>(null)
    const toRightRef = useRef<HTMLDivElement|null>(null)
 
    useEffect(() => {
        contentRef.current!.style.transform = `translateX(${move}%)`;
        if(position === 0) {
            toLeftRef.current!.style.display = 'none'
        } else  {
            toLeftRef.current!.style.display = 'block'   
        }

        if(position === 5) {
            toRightRef.current!.style.display = 'none'
        } else {
            toRightRef.current!.style.display = 'block'
        }
    },[move])
    const scrollToLeft = () => {
       setMove(m => m+100)
       setPosition(p => p-1)
    }

    const scrollToRight = () => {
        setMove(m => m-100)
        setPosition(p => p+1)
    }
  return (
    <div className={styles.postContainer}>
      <div className={styles.postContainerHead}>
        <div className={styles.postProfilePic}>
          <img
            className={styles.postProfileImg}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles.postProfileName}>
          <p>Selena Gomez</p>
        </div>
        <span className={styles.point}></span>
        <div className={styles.postCreatedAt}>
          <p>1w</p>
        </div>
        <div className={styles.postActions}>
          <button type="button">...</button>
        </div>
      </div>

      <div className={styles.postBody}>
      <div className={styles.postRightScroll} onClick={scrollToRight} ref={toRightRef}>
            <FaChevronCircleRight/>
        </div>
        <div className={styles.postLeftScroll} onClick={scrollToLeft} ref={toLeftRef}>
         <FaChevronCircleLeft/>   
        </div>
        <div className={styles.postBodyContent} ref={contentRef}>
        
        <img
          src="https://images.pexels.com/photos/5908756/pexels-photo-5908756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/6340634/pexels-photo-6340634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/7688105/pexels-photo-7688105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/5908756/pexels-photo-5908756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/6340634/pexels-photo-6340634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/7688105/pexels-photo-7688105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        </div>
        
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postFooterActions}>
          <button type="button">
            <AiOutlineHeart />
          </button>
          <button type="button">
            <FaRegComment />
          </button>
          <button type="button">
            <FiSend />
          </button>
          <button type="button" className={styles.lastChild}>
            <MdSaveAlt />
          </button>
        </div>
        <div className={styles.postFooterDetails}>
        <p className={styles.postFooterLikes}>7000 likes</p>
        <button className={styles.viewComments}>view all 100 comments</button>
        <div className={styles.addComment}>
            <input type="text" placeholder="Add a comment" />
            <div className={styles.addEmojiButton}>
                <BsEmojiSmile/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
