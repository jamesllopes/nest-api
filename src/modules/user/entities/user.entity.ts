import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  underscored: true,
  paranoid: true,
})
export default class User extends Model<User> {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    field: 'createdAt',
  })
  @CreatedAt
  createdAt: Date;

  @Column({
    field: 'updatedAt',
  })
  @UpdatedAt
  updatedAt: Date;
}
