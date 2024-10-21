const app = require('./app.js');
require('dotenv').config();

const PORT = process.env.PORT || 7070;

app.listen(PORT, () => console.log(`Serviço ativo na porta ${PORT}`));