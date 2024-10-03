'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Medicamento = sequelize.define('Medicamento', {
    descripcionMed: DataTypes.STRING,
    fechaFabricacion: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    Presentacion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precioVentaUni: DataTypes.FLOAT,
    precioVentaPres: DataTypes.FLOAT,
    CodTipoMed: DataTypes.INTEGER,
    Marca: DataTypes.STRING,
    CodEspec: DataTypes.INTEGER
  }, {});

  Medicamento.associate = function(models) {
    // Relación con DetalleOrdenCompra
    Medicamento.hasMany(models.DetalleOrdenCompra, {
      foreignKey: 'CodMedicamento'
    });
    // Relación con Especialidad
    Medicamento.belongsTo(models.Especialidad, {
      foreignKey: 'CodEspec'
    });
    // Relación con TipoMedic
    Medicamento.belongsTo(models.TipoMedic, {
      foreignKey: 'CodTipoMed'
    });
  };

  return Medicamento;
};
