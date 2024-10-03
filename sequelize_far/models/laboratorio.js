'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Laboratorio = sequelize.define('Laboratorio', {
    descripcion: DataTypes.STRING
  }, {});

  Laboratorio.associate = function(models) {
    // Relación con OrdenCompra
    Laboratorio.hasMany(models.OrdenCompra, {
      foreignKey: 'CodLab'
    });
  };

  return Laboratorio;
};
