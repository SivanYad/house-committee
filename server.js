const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const tenantRoute = require('./routes/api/tenant'); 

const app = express();

//Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Init middleware
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

//Define routes
app.use('/',tenantRoute);












//Populate the collections with starter data

// const tenant = require('./models/tenant');
// const expense = require('./models/expense');
// const starterData = require('./tenantsData.json');
// const expenseData = require("./expenceData.json")

// expenseData.map(data => {
//     let e = new expense(data);
//     console.log(e);
//     e.save()
// })
