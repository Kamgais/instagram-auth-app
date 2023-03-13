import { Comment } from "../models/comment-model";
import { Media } from "../models/media-model";
import { Post } from "../models/post-model"



export const findAllPosts = async() => {
  
    try {
      const allPosts = await Post.findAll({
        include: [{
            model: Media,
            as: 'medias',
          },
          {
              model: Comment,
              as: 'comments'
          }
        ],
      });
      return Promise.resolve(allPosts) 
    } catch (error) {
       return Promise.reject(error); 
    }
}

export const updatePost = async(post: Post): Promise<Post|null> => {
    try {
        await Post.update(post , {where: {id : post.id}})

        const postFromDB = await Post.findByPk(post.id, {
            include: [
                {
                    model : Media,
                    as: 'medias'
                }
            ]
        })
       // console.log(postFromDB)
        return Promise.resolve(postFromDB)

    } catch (error) {
        return Promise.reject(error)
    }
}


export const findPostById = async(id: number): Promise<Post|null> => {
    try {
      const postFromDB = await Post.findByPk(id, {
        include : [
            {
                model: Media,
                as: 'medias'
            },
            {
                model: Comment,
                as: 'comments'
            }
        ]
      });
      
      return Promise.resolve(postFromDB)
    } catch (error) {
      return Promise.reject(error);  
    }
}