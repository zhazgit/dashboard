const express = require('express');
const router =  express.Router();


router.get('/', (req, res) => {
    res.send("ROTA ADMIN /");
});

module.exports = router;