'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const DetalleOrdenCompra = sequelize.define('DetalleOrdenCompra', {
    NroOrdenC: DataTypes.INTEGER,
    CodMedicamento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    montouni: DataTypes.FLOAT
  }, {});

  DetalleOrdenCompra.associate = function(models) {
    // Relación con OrdenCompra
    DetalleOrdenCompra.belongsTo(models.OrdenCompra, {
      foreignKey: 'NroOrdenC'
    });
    // Relación con Medicamento
    DetalleOrdenCompra.belongsTo(models.Medicamento, {
      foreignKey: 'CodMedicamento'
    });
  };

  return DetalleOrdenCompra;
};
