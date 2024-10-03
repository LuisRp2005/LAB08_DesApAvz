'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrdenCompras', [
      { fechaEmision: new Date(), Situacion: 'Pendiente', Total: 1000.00, CodLab: 1, NrofacturaProv: 'FAC-1234', createdAt: new Date(), updatedAt: new Date() },
      { fechaEmision: new Date(), Situacion: 'Completada', Total: 2000.00, CodLab: 2, NrofacturaProv: 'FAC-5678', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrdenCompras', null, {});
  }
};

