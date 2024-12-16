const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const mongodb_Url = process.env.MONGODB_URL; 
const Port = process.env.PORT || 3000; 

mongoose.connect(mongodb_Url)
.then(() => console.log("Database connected!"))
.catch((err) => console.log("Error connecting to the database:", err));

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
