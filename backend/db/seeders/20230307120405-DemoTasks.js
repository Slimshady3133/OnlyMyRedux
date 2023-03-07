/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tasks', [
      {
        body: 'сделать зарядку',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: 'принять душ',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: 'позавтракать',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
