let Mock = require('mockjs');
let express = require('express');
let router = express.Router();

//http://127.0.0.1:3000/cweb/app/home

router.all('/QueryGiveUpReason.do', (req, res) => {
    res.json(Mock.mock({
        "_RejCode": "000000",
        "List|1-9": [{
            "ReasonId|+1": 100,
            "ReasonDesc": '@cword(10,20)',
        }]
    }));
});

router.all('/BankBindListQuery.do', (req, res) => {
    res.json(Mock.mock({
        "List|1-6": [{
                "Instname": "银联",
                "SubItems": [{
                        "Loanaccount": "70100030001324423",
                        "Accountsubno": "110120004111502995"
                    },
                    {
                        "Loanaccount": "70100030001324445",
                        "Accountsubno": "110220004111502997"
                    },
                    {
                        "Loanaccount": "70100030001324478",
                        "Accountsubno": "110120004111503000"
                    }
                ],
                "loanFlags": {
                    "hasLoan|1": false,
                    "hasRevolvingLoan|1": true,
                    "hasShoppingLoan|1": false
                },
                "Bankcardkind": "0",
                "Daymax": "300000",
                "loanList": [{
                    "ClosPenRate": "0",
                    "MonFeeRate3": "0",
                    "MonFeeRate2": "0",
                    "OpenBank": "102",
                    "ProdType": "1022",
                    "MonFeeRate1": "0",
                    "DebitCardNo": "1994959645188488189",
                    "CurrRepayFg": "1",
                    "Account": "70100030001324445",
                    "ClosPenMin": "0",
                    "NextRepayAmt": "@float(1,30,3,3)",
                    "BillDate": "@date(yyyyMMdd)",
                    "CreditAmt": "39000",
                    "AccountType": "L",
                    "RemainPlanFg": "1",
                    "LoanAmount": "@float(10,40,2,2)",
                    "DebitCardFg": "",
                    "LoanStatus": "N",
                    "MonRate": "1.5",
                    "AccountStatus": "LOAN",
                    "RepayData": "\u0000351-07-24",
                    "DailyRate": "0.05"
                }],
                "Instcode": "CUP",
                "Defaultbank": "1",
                "Singlemin": "0",
                "Bankcode": "@natural( 101, 109 )",
                "Daymin": "0",
                "Idtype": "2",
                "Idno": "44018419900324391X",
                "Status": "1",
                "Bankaccount|16": "@natural(15,19)",
                "Singlemax": "50000",
                "Binddate": "@date(yyyyMMdd)"
            }],
        "_RejCode": "000000"
    }));
});

module.exports = router;