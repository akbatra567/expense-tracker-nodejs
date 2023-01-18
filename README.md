## Expense Tracker Nodejs

Workflow 
1. Enter new expense
2. View Expenses summary 


New Expense flow: 
-> Pick a date of expense
-> Enter the desription of expense
-> Select or create a category
-> Price of expense

--------> Save's record 


View expenses summary flow:
1. View all expenses
2. View monthly expenses by category

View monthly expenses by category flow:
1. Provide month(mm) and Year (yyyy) as input
---------> filter results on month and year returns average of sum of expenses by categories


Tables:

1. expenses:
```
id Integer primary key
date DATE
description TEXT
category TEXT
amount DOUBLE(10, 2)

```
