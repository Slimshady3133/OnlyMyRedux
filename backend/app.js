require('dotenv').config();
const express = require('express');
const db = require('./db/models');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;
config(app);

const apiTasks = require('./routes/tasks.routes');

app.use('/api/tasks', apiTasks);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
