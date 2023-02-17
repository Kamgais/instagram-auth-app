import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { User } from "./user-model";

@Table({ tableName: "sessions", timestamps: false })
export class Session extends Model<Session> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  })
  valid!: boolean;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
