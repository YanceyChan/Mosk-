let Mock = require('mockjs');
let express = require('express');
let router = express.Router();

router.all('/deviceRecords', (req, res) => {
    res.json(Mock.mock({
        "_RejCode": "000000",
        "List|1-20": [{
            "DeviceName" : '@cword(5,10)',
            "LoginDate": '@date()',
            "LoginTime": '@time()'
        }]
    }));
})

module.exports = router;