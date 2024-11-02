const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./routes/Routes');
app.use(cors());

const url = 'mongodb://localhost:27017/TableReservation';

mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json());

app.use('/' ,userRouter)


app.listen(8500, () => {
 console.log("Server started at port 3000");
});
