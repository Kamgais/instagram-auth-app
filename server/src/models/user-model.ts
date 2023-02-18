import {
  Table,
  Column,
  Model,
  HasMany
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { Session } from "./session-model";

@Table({ tableName: "users", timestamps: false })
export class User extends Model<User> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 10],
    },
  })
  username!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 20],
    },
  })
  fullName!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    set(value: string) {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(value, salt);
      this.setDataValue("password", hash);
    },
  })
  password!: string;

  @Column({
    type: DataTypes.STRING(255),
    defaultValue: "",
  })
  characteristics!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      notEmpty: true,
      isEmail: true,
    },
  })
  email!: string;

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  telefon!: string;

  @Column({
    defaultValue: "masc",
    type: DataTypes.STRING(510),
    validate: {
      isIn: [["masc", "femin"]],
    },
  })
  sex!: string;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  isEmailConfirmated!: boolean;

  @HasMany(() => Session)
  sessions!: Session[];
}
