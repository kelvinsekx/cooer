import express from "express"
import path from "path"
const CWD = process.cwd();

import cookieParser from "cookie-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet";


//import devBundle from "./devBundle"
const APP = express();

//devBundle.compile(APP)


/*************
 ************
 ***********
 **********
 *********
 ******** 
 ******* 
 ****** 
 ***** 
 ****
 ***
 **
 *
 * welcome to the land,
 * start breaking the WEB king
 * DO NOT STOP TO FORGET KELVIN, YOU ARE THE BEST 
 * ********************************************
 * ********************************************
 * ********************************************
 * ********************************************
 * ###################################################
 */

import routeManager from "./infrastructure/routeManager";
import configManager from "./infrastructure/configManager"

// HACK
// global.window = undefined;
// global.document = undefined;

APP.use(express.json())
APP.use(express.urlencoded({extended: true}))
APP.use(cookieParser())
APP.use(compress())
APP.use(helmet())
APP.use(cors());


APP.use("/dist", express.static(path.join(CWD, "dist")))

configManager.handle(APP)
routeManager.handle(APP)

APP.use((err, req, res, next) => {  
    if (err.name === 'UnauthorizedError') {    
        res.status(401).json({"error" : err.name + ": " + err.message})  
    }else if (err) {    
        res.status(400).json({
            "error" : err.name + ": " + err.message
        })    
        console.log(err)  
}})

export default APP;