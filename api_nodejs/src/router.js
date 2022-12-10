const express = require('express');

const testServerController = require('./controllers/testServerController');

const router = express.Router();

router.get('/testrouter', (req, res) => { 
    console.log("router works!");
    res.status(200).send({
        "menssage": "Ok!"
    });
});

router.get('/server', testServerController.testServer);

module.exports = router;