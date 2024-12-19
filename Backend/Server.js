const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const mongodb_Url = process.env.MONGODB_URL; 
const Port = process.env.PORT || 3000; 
app.use(express.json())
mongoose.connect(mongodb_Url)
.then(() => console.log("Database connected!"))
.catch((err) => console.log("Error connecting to the database:", err));

const ComplaintRouter = require('./routers/Complaint_Router')
app.use('/complaint',ComplaintRouter)

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

//routers
const adminRoutes = require('./routers/Admin_Router')
app.use('/admin',adminRoutes)

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
