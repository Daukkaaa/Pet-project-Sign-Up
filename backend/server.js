const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./model/Employee.js');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.error("Error connecting to MongoDB:", err)
})


app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.json('Success');
                } else {
                    return res.json('The password is incorrect');
                }
            } else {
                return res.json('No record existed');
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/signup', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})

























