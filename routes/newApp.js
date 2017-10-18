let Mock = require('mockjs');
let express = require('express');
let router = express.Router();

router.all('/deviceRecords', (req, res) => {
    res.json(Mock.mock({
        "_RejCode": "000000",
        "List|1-9": [{
            "ReasonId|+1": 100,
            "ReasonDesc": '@cword(10,20)',
        }]
    }));
})

module.exports = router;