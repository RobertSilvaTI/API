const connection = require('./connection.js');

const consultaVendedores = async () => {
    const [vendedores] = await connection.execute('select * from vendedor');
    return vendedores;
};

module.exports = {
    consultaVendedores
};