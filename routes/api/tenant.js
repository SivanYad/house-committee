const express = require('express');
const router = express.Router();

const Tenant = require('../../models/tenant');

//Get Tenants

router.get('/', async (req, res) => {
    try{
        const tenants =  await Tenant.find({})
        res.send(tenants)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;