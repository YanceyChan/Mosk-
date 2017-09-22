let Mock = require('mockjs');
let express = require('express');
let router = express.Router();

//http://127.0.0.1:3000/cweb/app/home

router.all('/app/home', (req, res) => {
    res.json(Mock.mock({
        "result": "000000",
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }));
});

module.exports = router;