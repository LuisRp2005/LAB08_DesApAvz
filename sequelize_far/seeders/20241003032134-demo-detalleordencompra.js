'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DetalleOrdenCompras', [
      { NroOrdenC: 1, CodMedicamento: 1, descripcion: 'Paracetamol 500mg - Tableta', cantidad: 100, precio: 0.50, montouni: 50.00, createdAt: new Date(), updatedAt: new Date() },
      { NroOrdenC: 2, CodMedicamento: 2, descripcion: 'Ibuprofeno 200mg - Tableta', cantidad: 200, precio: 0.75, montouni: 150.00, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};
