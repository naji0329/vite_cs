const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())

app.use(express.json());

app.get('/api/sample', (req, res) => {
  res.status(200).json({
    "status": 0,
    "msg": "this is Data Requipment",
    "data": {
      "items": [
        {
          "id" : "1",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "2",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "3",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "5",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "6",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "7",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "8",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "9",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "10",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "11",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "12",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "reject"
        },
        {
          "id" : "13",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "14",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "15",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "16",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "17",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "18",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "19",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        },
        {
          "id" : "20",
          "detect_type": "sssssssssssssssssssssssssssssss",
          "name_unit": "dddddddddddddddddddddddddddddd",
          "contract": "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          "name": "ffffffffffffffffffffffffff",
          "funder": "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          "date": "2016-06-07T23:59:59",
          "status": "passed"
        }
      ]
    }
  });
});

app.listen(5000, () => console.log('start'));