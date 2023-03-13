import { Sequelize } from 'sequelize-typescript';
import { Comment } from '../models/comment-model';
import { Media } from '../models/media-model';
import { Post } from '../models/post-model';
import { Session } from '../models/session-model';
import { User } from '../models/user-model';

let sequelize;

export const connect = async() => {

     sequelize = new Sequelize({
        database: process.env.DB_NAME,
        dialect: 'mysql',
        username: process.env.DB_USER,
        password: '',
        models: [User, Session, Post, Media, Comment]
 })

    try {
        await sequelize.authenticate();
        console.log('Connect to Database...')
     //  sequelize.sync({alter: true})
    } catch (error) {
        console.error('Errors occurs...')
    }

}

export default sequelize;


