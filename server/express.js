import express from "express"

import cookieParser from "cookie-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet";


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

import routeManager from "./infrastructure/routeManager"
import configManager from "./infrastructure/configManager";

function app (APP){
APP.use(express.json())
APP.use(express.urlencoded({extended: true}))
APP.use(cookieParser())
APP.use(compress())
APP.use(helmet())
APP.use(cors());

//App.get("/", (req, res)=>res.send("this is a backend app, visit the /graphql to play with data"))

configManager.handle(APP)
routeManager.handle(APP);

APP.use((err, req, res, next) => {  
    if (err.name === 'UnauthorizedError') {    
        res.status(401).json({"error" : err.name + ": " + err.message})  
    }else if (err) {    
        res.status(400).json({
            "error" : err.name + ": " + err.message
        })    
        console.log(err)  
}});
return APP;
}
export default app;
