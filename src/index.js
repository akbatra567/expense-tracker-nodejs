const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const app = express();

// const mongoose = require('./../connection/conn.js');

// mongoose.connect('mongodb://127.0,01/my_database')
//   .then(() => console.log('Connected!'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(express.static('public'))

const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/addNewExpense', (req,res)=> {
    res.send("Add new expense page");
});

app.get('/viewExpenseSummary', (req,res)=> {
    res.send("Show expense summary page");
});

app.get('/viewAllExpenses', (req,res)=> {
    res.send("View all expenses screen");
});

app.get('/viewMonthlyExpensesByCategory', (req,res)=> {
    res.send("View monthly expenses by category");
});

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
})