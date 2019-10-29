// Libs
import { Sequelize } from 'sequelize'

// Models
import User from '../app/models/User'

// Config
import databaseConfig from '../config/database'

// Models
const models = [User]

class Database {
  private connection!: Sequelize

  constructor() {
    this.init()
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig)

    models.map(model => model.initModel(this.connection))
  }
}

export default new Database()
