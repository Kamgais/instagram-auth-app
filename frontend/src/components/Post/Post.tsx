import React, { FunctionComponent, useState , useRef, useEffect} from "react";
import styles from "./post.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment , FaChevronCircleRight ,  FaChevronCircleLeft  } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdSaveAlt } from "react-icons/md";
import {BsEmojiSmile} from 'react-icons/bs'
import { PostDto } from "../../types/PostDto";
import moment from "moment";
import { useUser } from "../../hooks/useUser";
import { useUpdatePost } from "../../hooks/useUpdatePost";

type Props = {
  post: PostDto
}



const Post: FunctionComponent<Props> = ({post}) => {
    const [position, setPosition] = useState(0);
    const [move, setMove] = useState(0)
    const [addCommentButton, setAddCommentButton] = useState(false)
    const contentRef = useRef<HTMLDivElement|null>(null)
    const toLeftRef = useRef<HTMLDivElement|null>(null)
    const toRightRef = useRef<HTMLDivElement|null>(null)
    const {data: author, isLoading} = useUser(post.userId!)
    const likePost = useUpdatePost();
 
    useEffect(() => {
        contentRef.current!.style.transform = `translateX(${move}%)`;
        if(position === 0) {
            toLeftRef.current!.style.display = 'none'
        } else  {
            toLeftRef.current!.style.display = 'block'   
        }

        if(position === post.medias.length - 1) {
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


    // toogle the add comment button
    const toogleAddCommentButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length === 0)  {
          setAddCommentButton(false)
        } else {
          setAddCommentButton(true)
        }
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
          <p>{author?.username}</p>
        </div>
        <span className={styles.point}></span>
        <div className={styles.postCreatedAt}>
          <p>{`${moment(new Date(post.createdOn)).fromNow()}`}</p>
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
          {
          post.medias.map((media:any, index: any) => (
            <img
            src={media.mediaUrl}
            alt=""
            key={index}
          />
          ))
          }
        
       
        </div>
        
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postFooterActions}>
          <button type="button" onClick={() => likePost.mutate({...post, likeCount: post.likeCount! + 1})}>
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
        <p className={styles.postFooterLikes}>{post.likeCount} likes</p>
        <button className={styles.viewComments}>{post.comments.length ? `View all ${post.comments.length} comments` : `no comment`}</button>
        <div className={styles.addComment}>
            <input type="text" placeholder="Add a comment" onChange={(e) => toogleAddCommentButton(e)} />
           {
             addCommentButton && <button className={styles.postCommentButton}>post</button>
           } 
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
