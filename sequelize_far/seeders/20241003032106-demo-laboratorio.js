'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Laboratorios', [
      { descripcion: 'Laboratorio XYZ', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Laboratorio ABC', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Laboratorios', null, {});
  }
};
