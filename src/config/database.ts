import { Options } from 'sequelize'

export default {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'go-barber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
} as Options
