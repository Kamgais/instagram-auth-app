import React, {FunctionComponent} from 'react'
import Post from '../../components/Post/Post';
import styles from './postList.module.scss';

const PostList: FunctionComponent = () => {
  return (
    <div className={styles.postListContainer}>
       {
        [1,2,3,4,5,6,7,8,9,10].map((post: any, index) => {
            return (

                <Post key={index}/>
            )
        })
       } 

    </div>
  )
}

export default PostList