let Mock = require('mockjs');
let express = require('express');
let router = express.Router();

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
        "List|0-6": [{
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
                "loanList|0-3": [{
                    "ClosPenRate": "0",
                    "MonFeeRate3": "0",
                    "MonFeeRate2": "0",
                    "OpenBank": /10[1-9]/,
                    "ProdType": /(1022|1012|2113)/,//花贷购代码
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
                    "RepayData": "@date()",
                    "DailyRate": "0.05"
                }],
                "Instcode": "CUP",
                "Defaultbank": "1",
                "Singlemin": "0",
                "Bankcode": /10[1-9]/,
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

router.all('/MerHotPrdDetailQry.do', (req, res) => {
    res.json(Mock.mock({
        "PrdTotalPrice" : "@integer(100,10000)",
        "MerChantSeq" : "106",
        "PrdInventory" : "@natural( 0, 200 )",
        "_RejCode" : "000000",
        "PrdShowImgUrlList" : [
          "@image('300x500',@color,'ddd')",
          "@image('300x500',@color)"
        ],
        "PrdImgUrlList" : [
          "@image('300x250',@color,'ddd')",
          "@image('300x250',@color,'ddd')",
          "@image('300x250',@color,'ddd')",
          "@image('300x250',@color,'ddd')"
        ],
        "PeriodScope" : "6,12",
        "PrdNum" : "fefef",
        "Promise" : "%25E6%2597%25A0",
        "PrdEndDate" : "2018-02-01 00:00:00",
        "PrdBigType" : 3,
        "PrdName" : "@ctitle(4,15)",
        "PrdParameter" : "玫瑰金",
        "PrdCreateDate" : "2017-04-28 14:44:30",
        "ProdCode" : "21130191",
        "PrdBeginDate" : "2017-04-28 00:00:00",
        "PrdNewPrice" : "@integer(100,10000)",
        "TwoDimensionCode" : "http:\/\/20.223.0.37\/img\/home\/csii\/advforupload\/HOTCODE_20170428_7C5F725A9B90497C8EED50466763464E.jpg",
        "PrdDesc" : "@cparagraph(4,6)",
        "LoanPurpose" : "3",
        "PrdId" : 847,
        "PrdSmallType" : 4
    }));
});

module.exports = router;
