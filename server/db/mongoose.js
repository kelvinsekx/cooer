import mongoose from "mongoose";
import config from "./../../config/config";

const mongoURL = ()=> {
    if (process.env.NODE_ENV.trim() == "production") return config.mongoUri;
    return config.mongoUriDev
}

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
mongoose.Promise = global.Promise;
mongoose.connect(
    mongoURL(), 
    options,
    function(err, db) {
        //assert.equal(null, err);
        console.log('Connected successfully to database');

        // db.close(); turn on for testing
    }
);

mongoose.connection.on("error", ()=> {throw new Error(`unable to connect to database: ${mongoURL()}`)});

//mongoose.set('debug', true);

export default mongoose.connection