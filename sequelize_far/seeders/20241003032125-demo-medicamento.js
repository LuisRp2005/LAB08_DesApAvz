'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicamentos', [
      { descripcionMed: 'Paracetamol 500mg', fechaFabricacion: new Date('2023-01-01'), fechaVencimiento: new Date('2024-12-31'), Presentacion: 'Tableta', stock: 100, precioVentaUni: 0.50, precioVentaPres: 5.00, CodTipoMed: 1, Marca: 'Generic Labs', CodEspec: 1, createdAt: new Date(), updatedAt: new Date() },
      { descripcionMed: 'Ibuprofeno 200mg', fechaFabricacion: new Date('2023-02-01'), fechaVencimiento: new Date('2024-11-30'), Presentacion: 'Tableta', stock: 200, precioVentaUni: 0.75, precioVentaPres: 7.00, CodTipoMed: 2, Marca: 'PharmaPlus', CodEspec: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicamentos', null, {});
  }
};
