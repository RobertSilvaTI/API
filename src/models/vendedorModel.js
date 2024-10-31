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

const excluirVendedor = async (codigo) => {
    const [excluiVendedor] = await connection.execute('delete from vendedor where codigo = ?', [codigo]);
    return excluiVendedor;
};

const atualizarVendedor = async (codigo, vendedor) => {
    const { nome, senha, email } = vendedor;
    
    const query = 'update vendedor set nome = ?, senha = ?, email = ? where codigo = ?';
    
    const [atualizaVendedor] = await connection.execute(query, [nome, senha, email, codigo]);
    return atualizaVendedor;
};

module.exports = {
    consultaVendedores,
    inserirVendedor,
    excluirVendedor,
    atualizarVendedor
};