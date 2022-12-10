const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server Up! na porta ${PORT}`));