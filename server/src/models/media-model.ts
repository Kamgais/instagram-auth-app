import { DataTypes } from "sequelize";
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "./post-model";


@Table({tableName: 'medias', timestamps: false})
export class Media extends Model<Media> {
    

    @Column({
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;


    @Column({
        field: 'media_url',
        type: DataTypes.STRING(255),
        allowNull: false
    })
    mediaUrl!: string;

    @Column({
        field: 'media_type',
        type: DataTypes.STRING(255),
        defaultValue: 'image',
        allowNull: false,
       
    })
    mediaType!: string;

    @Column({
        field: 'media_name',
        type: DataTypes.STRING(255),
        allowNull: false
       
    })
    mediaName!: string;

    @BelongsTo(() => Post)
    post!: Post;

    @ForeignKey(() => Post)
    @Column({
        type: DataTypes.INTEGER
    })
    postId!: number;
}