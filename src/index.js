const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(express.static('public'))

const port = process.env.port || 3000; 

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