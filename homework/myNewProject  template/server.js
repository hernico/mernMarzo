const express = require('express');
const app = express();
require('./server/routes/person.routes')(app); // This is new
app.listen(8000, () => console.log('Server running on port 8000'));
