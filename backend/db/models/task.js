const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate() {}
  }
  Task.init(
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
