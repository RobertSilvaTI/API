const express = require('express');
const router = express.Router();

router.get('/', (request, response) => response.status(200).send('API ativa!'));

module.exports = router;