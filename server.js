const express = require('express');
const bodyParser = require('body-parser');
const { countries } = require("./countries");
const app = express();

const requiredFields = {
    personal: ['firstName', 'lastName', 'email'],
    business: ['businessName', 'email'],
}

//BodyParser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/api/customer', (req, res) => {
    let okStatus = false;

    okStatus = requiredFields.personal.every((el) => req.body.hasOwnProperty(el)) ||
        requiredFields.business.every((el) => req.body.hasOwnProperty(el))

    const statusNumber = okStatus ? 200 : 400

    res.sendStatus(statusNumber);
})

app.get('/api/countries', (req, res) => {
    res.json(countries)
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server on port ${port}`));