const express = require('express');
const router = express.Router();
const vendedorController = require('./controllers/vendedorController.js');
const vendedorMiddleware = require('./middlewares/vendedorMiddleware.js');

router.get('/', (request, response) => response.status(200).send('API ativa!'));
router.get('/vendedor', vendedorController.consultaVendedores);
router.post('/vendedor', vendedorMiddleware.validarInsert, vendedorController.inserirVendedor);
router.delete('/vendedor/:codigo', vendedorController.excluirVendedor);
router.put('/vendedor/:codigo', vendedorMiddleware.validarInsert ,vendedorController.atualizarVendedor);

module.exports = router;