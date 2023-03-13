import { DataTypes } from "sequelize";
import { BelongsTo, Column, CreatedAt, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Comment } from "./comment-model";
import { Media } from "./media-model";
import { User } from "./user-model";



@Table({tableName: 'posts', timestamps: true, createdAt: false, updatedAt: false})
export class Post extends Model<Post> {

    @Column({
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })
    id!: number;


    @Column({
        type: DataTypes.STRING(510),
        allowNull: false,
        defaultValue: ''
    })

     description!:string;


     @Column({
        field: 'like_count',
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
     })
     likeCount!:number;

    @Column({
      type : DataTypes.DATE,
      defaultValue: new Date(Date.now())
    })
    createdOn?: Date;
   

    

    
     @BelongsTo(() => User)
     user!: User;

     @ForeignKey(() => User)
     @Column({
        type: DataTypes.INTEGER
     })
     userId!:number;

     @HasMany(() => Media)
     medias!: Media[];

     @HasMany(() => Comment)
     comments!: Comment[]


}