const express = require('express');
const router = express.Router();

const Expense = require('../../models/expense');

router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.send(expenses);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;