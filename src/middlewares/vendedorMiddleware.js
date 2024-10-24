const validarInsert = (request, response, next) => {
    const { body } = request;

    if (body.nome === undefined) {
        return response.status(400).json({ message: 'Campo `nome` é obrigatório!' });
    }

    if (body.nome === '') {
        return response.status(400).json({ message: 'Campo `nome` não pode ser vazio!' });
    }

    if (body.senha === undefined) {
        return response.status(400).json({ message: 'Campo `senha` é obrigatório!' });
    }

    if (body.senha === '') {
        return response.status(400).json({ message: 'Campo `senha` não pode ser vazio!' });
    }

    if (body.email === undefined) {
        return response.status(400).json({ message: 'Campo `email` é obrigatório!' });
    }

    if (body.email === '') {
        return response.status(400).json({ message: 'Campo `email` não pode ser vazio!' });
    }

    next();
};

module.exports = {
    validarInsert
};