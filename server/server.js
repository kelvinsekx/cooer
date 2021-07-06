import mongoose from "mongoose";

import config from "./../config/config";
import app from "./express";

const mongoURL = ()=> {
    if (process.env.NODE_ENV.trim() == "production") return config.mongoUri;
    return config.mongoUriDev
}

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on("error", ()=> {throw new Error(`unable to connect to database: ${mongoURL()}`)});

app.listen(config.port, (err, result)=> {
    if(err)console.log(err);
    console.info(`server started on port ${config.port}`)
})