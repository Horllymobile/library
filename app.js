const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');





const app = express();
const port = process.env.PORT
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist'))); 

app.use(morgan('tiny'));



app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



app.listen(port, () => {
    debug(('Listening to port ' + chalk.green(port)));
});
