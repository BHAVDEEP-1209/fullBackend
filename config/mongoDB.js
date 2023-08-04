const mongoose = require("mongoose");

mongoose
    .connect(process.env.DATABASE_URL,{
        dbName : process.env.DATABASE_DATABASE
    })
    .then(()=>{
        console.log("Mongodb database connected!")
    })
    .catch((error)=>{
        console.log(`Error while connecting to mongodb database: ${error.message}`);
    })


mongoose.connection.on("connected",()=>{
    console.log("Mongodb connection is on!");
})

mongoose.connection.on("error",(err)=>{
    console.log(`Error in mongodb connection!: ${err.message}`)
})

mongoose.connection.on("disconnected",(err)=>{
    console.log("Mongodb connection is diconnected!")
})


process.on('SIGINT',async()=>{
    await mongoose.connection.close();
    process.exit(0);
})

module.exports = mongoose;
