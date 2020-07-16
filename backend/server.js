const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require('body-parser')

const router = require('./routers/userRouter')

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())
app.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/feedbackdb',{ useNewUrlParser: true });

router(app);
 
app.listen(port, () => {
    console.log(`server is running on port:  ${port}`);

})