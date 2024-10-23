const express = require('express');
const router = express.Router();
const vendedorController = require('./controllers/vendedorController.js');

router.get('/', (request, response) => response.status(200).send('API ativa!'));
router.get('/vendedor', vendedorController.consultaVendedores);
router.post('/vendedor', vendedorController.inserirVendedor);

module.exports = router;