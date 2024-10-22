const vendedorModel = require('../models/vendedorModel.js');

const consultaVendedores = async (request, response) => {

    const vendedores = await vendedorModel.consultaVendedores();
    return response.status(200).json(vendedores);
};

module.exports = {
    consultaVendedores
};