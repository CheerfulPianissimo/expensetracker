module.exports = {
  HOST: "localhost",
  USER: "archuser",
  PASSWORD: "12345678",
  DB: "expensetracker",
  dialect: "postgresql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

