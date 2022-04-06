const express = require('express');
const xmod = require('../xmod');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send(xmod.add())
});
module.exports = router;