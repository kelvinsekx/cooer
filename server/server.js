import config from "./../config/config";
import app from "./app";
import mongoose from "./db/mongoose"

app.then(app=> app.listen(config.port, (err, result)=> {
    if(err)console.log(err);
    console.info(`server started on port ${config.port}`)
}))
