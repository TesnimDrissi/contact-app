const db = require('./database/models/index.js');
const express = require('express');
const cors = require('cors');
const app = express ();
const PORT = 5000;
app.use (express.json());
app.use(cors());

const user = require ('./routes/user');

app.use('/user', user)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})



