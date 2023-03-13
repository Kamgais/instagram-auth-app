import React, {FunctionComponent} from 'react'
import Loader from '../../components/Loader/Loader';
import Post from '../../components/Post/Post';
import { usePosts } from '../../hooks/usePosts';
import styles from './postList.module.scss';

const PostList: FunctionComponent = () => {
  const {data,isLoading, isError, isFetching} = usePosts()

  return (
    <div className={styles.postListContainer}>
     {
        isFetching && (<Loader/>)
     } 
       {
        data?.map((post: any, index) => {
            return (

                <Post key={index} post={post}/>
            )
        })
       } 

    </div>
  )
}

export default PostList