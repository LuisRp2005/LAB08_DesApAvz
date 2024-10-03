const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const sequelize = new Sequelize('farmacia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


const medicamentoModel = sequelize.define('medicamento', {
    CodMedicamento: { type: Sequelize.INTEGER, primaryKey: true },
    descripcionMed: Sequelize.STRING,
    fechaFabricacion: Sequelize.DATE,
    fechaVencimiento: Sequelize.DATE,
    Presentacion: Sequelize.STRING,
    stock: Sequelize.INTEGER,
    precioVentaUni: Sequelize.DECIMAL,
    precioVentaPres: Sequelize.DECIMAL,
    CodTipoMed: Sequelize.INTEGER,
    Marca: Sequelize.STRING,
    CodEspec: Sequelize.INTEGER
}, {
    freezeTableName: true  // Evita que Sequelize pluralice el nombre de la tabla
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos OK');
    })
    .catch(error => {
        console.log('Error de conexión a la base de datos: ' + error);
    });

// Consultar todos los medicamentos
medicamentoModel.findAll({ attributes: ['CodMedicamento', 'descripcionMed', 'fechaFabricacion', 'fechaVencimiento', 'Presentacion', 'stock', 'precioVentaUni', 'precioVentaPres', 'CodTipoMed', 'Marca', 'CodEspec'] })
    .then(medicamentos => {
        const resultados = JSON.stringify(medicamentos);
        console.log(resultados);
    });

app.listen(3000, () => {
    console.log('Servidor conectado en el puerto 3000');
});
