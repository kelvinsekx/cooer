import mongoose from "mongoose";

import config from "./../config/config";
import app from "./express";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on("error", ()=> {throw new Error(`unable to connect to database: ${config.mongoUri}`)});

app.listen(config.port, (err, result)=> {
    if(err)console.log(err);
    console.info(`server started on port ${config.port}`)
})