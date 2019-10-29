import Sequelize, { Model, DataTypes } from 'sequelize'

interface User {
  id: number
  name: string
  email: string
  password_hash: string
  provider: boolean
  updatedAt: string
  createdAt: string
}

class User extends Model {
  public name!: string
  public email!: string
  public password_hash!: string
  public provider!: boolean

  static initModel(sequelize: Sequelize.Sequelize): {} {
    User.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        provider: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    )
    return this
  }
}

export default User
