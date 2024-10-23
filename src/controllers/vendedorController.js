const { response } = require('express');
const vendedorModel = require('../models/vendedorModel.js');

const consultaVendedores = async (_request, response) => {

    const vendedores = await vendedorModel.consultaVendedores();
    return response.status(200).json(vendedores);
};

const inserirVendedor = async (request, response) => {
    //const insercaovendedor = await vendedorModel.inserirVendedor();
    return response.status(201).json({message: 'Ok'});
};

module.exports = {
    consultaVendedores,
    inserirVendedor
};