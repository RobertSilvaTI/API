const { response, request } = require('express');
const vendedorModel = require('../models/vendedorModel.js');

const consultaVendedores = async (_request, response) => {

    const vendedores = await vendedorModel.consultaVendedores();
    return response.status(200).json(vendedores);
};

const inserirVendedor = async (request, response) => {
    const insercaovendedor = await vendedorModel.inserirVendedor(request.body);

    return response.status(201).json(insercaovendedor);
};

const excluirVendedor = async (request, response) => {
    const { codigo } = request.params;

    await vendedorModel.excluirVendedor(codigo);
    return response.status(204).json();
};

module.exports = {
    consultaVendedores,
    inserirVendedor,
    excluirVendedor
};