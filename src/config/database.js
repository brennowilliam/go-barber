module.exports = {
  dialect: 'postgress',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'go-barber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
