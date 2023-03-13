import { DataTypes } from "sequelize";
import { Model, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Post } from "./post-model";
import { User } from "./user-model";

@Table({ tableName: "comments", timestamps: false })
export class Comment extends Model<Comment> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataTypes.STRING(510),
    allowNull: false,
    defaultValue: "",
  })
  content!: string;

  @Column({
    field: "like_counter",
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  likeCounter!: number;

  @Column({
    field: "created_on",
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(Date.now()),
  })
  createdOn!: Date;


  @BelongsTo(() => Post)
  post!: Post;

  @BelongsTo(() => User)
  user!: User;

   @ForeignKey(() => Post)
   @Column({
    field: 'post_id',
    type: DataTypes.INTEGER,
    allowNull: false
   })
   postId!: number;

   @ForeignKey(() => User)
   @Column({
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: false
   })
   userId!: number;

}
