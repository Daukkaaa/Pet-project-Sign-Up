const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./model/Employee');


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/Dauka', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err)
});


app.post('/signup', (req, res) => {
    const {firstName, lastName, country, phone, email, password} = req.body;
    EmployeeModel.create({firstName, lastName, country, phone, email, password})
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json(err))
});


app.post('signin', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email})
    .then(user => {
        if (!user) {
            return res.status(404).json("Password is incorrect");
        } if (user.password !== password) {
            return res.status(400).json("Password is incorrect");
        }
        res.json("Login successful");
    })
    .catch(err => res.status(500).json(err))
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
