const mongoose = require("mongoose");

require("dotenv").config();

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URL)
       
        .then((conn) => {
            console.log(`Connection To Database ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1);
    })
    
}


module.exports = connectToDb;