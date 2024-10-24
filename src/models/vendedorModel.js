const connection = require('./connection.js');

const consultaVendedores = async () => {
    const [vendedores] = await connection.execute('select * from vendedor');
    return vendedores;
};

const inserirVendedor = async (vendedor) => {
    const { nome, senha, email} = vendedor;
    const dataAtual = new Date(Date.now()).toLocaleDateString();

    const sql = 'insert into vendedor(nome, senha, email, dtcadastro) values (?, ?, ?, ?)';

    const [insercaoVendedor] = await connection.execute(sql, [nome, senha, email, dataAtual]);

    return {InsertId: insercaoVendedor.insertId};
};

module.exports = {
    consultaVendedores,
    inserirVendedor
};