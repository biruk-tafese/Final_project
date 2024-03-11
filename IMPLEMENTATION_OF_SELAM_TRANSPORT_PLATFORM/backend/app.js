const config = require('./utils/config');
const express = require('express');

const logger = require('./utils/logger');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//db connection

mongoose.connect(
    config.MONGODB_URI, {
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    () => {
        logger.info('connected to MongoDB');
    }
).catch(error)( 
    () => {
        logger.error("Error connection to MonogoDB:", error.message)
    }
)


app.get('/', (req, res) => {
     return res.json({message: "Running ..."});
} )


module.exports = app;