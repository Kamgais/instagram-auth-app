import { Sequelize } from 'sequelize-typescript';
import { Session } from '../models/session-model';
import { User } from '../models/user-model';

let sequelize;

export const connect = async() => {

     sequelize = new Sequelize({
        database: process.env.DB_NAME,
        dialect: 'mysql',
        username: process.env.DB_USER,
        password: '',
        models: [User, Session]
 })

    try {
        await sequelize.authenticate();
        console.log('Connect to Database...')
     //  sequelize.sync({force: true})
    } catch (error) {
        console.error('Errors occurs...')
    }

}

export default sequelize;


