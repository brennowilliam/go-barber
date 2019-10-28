import Sequelize, { Model } from 'sequelize'

// // Interface
// export interface User {
//   name: string
// }

class User extends Model {
  static init(sequelize: Sequelize.Sequelize) {
    super.init({
      name: Sequelize.STRING,
    })
  }
}

// class User extends Model {
//   static init(sequelize: Sequelize) {
//     super.init({
//       name: Sequelize.STRING,
//     })
//   }
// }

// export default User
