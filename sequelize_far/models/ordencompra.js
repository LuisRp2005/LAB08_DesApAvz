'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const OrdenCompra = sequelize.define('OrdenCompra', {
    fechaEmision: DataTypes.DATE,
    Situacion: DataTypes.STRING,
    Total: DataTypes.FLOAT,
    CodLab: DataTypes.INTEGER,
    NrofacturaProv: DataTypes.STRING
  }, {});

  OrdenCompra.associate = function(models) {
    // Relación con DetalleOrdenCompra
    OrdenCompra.hasMany(models.DetalleOrdenCompra, {
      foreignKey: 'NroOrdenC'
    });
    // Relación con Laboratorio
    OrdenCompra.belongsTo(models.Laboratorio, {
      foreignKey: 'CodLab'
    });
  };

  return OrdenCompra;
};
