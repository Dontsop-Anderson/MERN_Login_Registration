const express = require('express');
const app = express();
const cors = require('cors');
// require('dotenv').config();
const cookies = require('cookie-parser');
// const port = process.env.PORT
const port = 8000;
app.use(cookies());
app.use(cors({
    credentials: true, origin: 'http://localhost:3000'
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));