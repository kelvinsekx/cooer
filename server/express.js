import express from "express";
import path from "path";
const CWD = process.cwd()

import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import React from "react";
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import MainRouter from "./../client/MainRouter";
import { ServerStyleSheet } from 'styled-components';


import devBundle from "./devBundle"
const APP = express();
devBundle.compile(APP)


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

import Template from "./template";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import gistRoutes from "./routes/gist.routes";
import ayozeRoutes from "./routes/ayoze.routes";

// HACK
global.window = undefined;
global.document = undefined;

APP.use(express.json())
APP.use(express.urlencoded({extended: true}))
APP.use(cookieParser())
APP.use(compress())
APP.use(helmet())
APP.use(cors());


APP.use("/_v1", authRoutes)
APP.use("/_v1", gistRoutes)
APP.use("/_v1", ayozeRoutes)
APP.use("/_v1", userRoutes)

APP.use("/dist", express.static(path.join(CWD, "dist")))


APP.get("/*", (req, res)=> {
    const sheet = new ServerStyleSheet();
    const context = {};

    // create markup
    const markup = renderToString(
        sheet.collectStyles(
            <StaticRouter location={req.url} context={context}>
            <MainRouter />
        </StaticRouter>
        )
    );

    /**
     *  Don't make my reload work,
     *  I don't know why 
     * */
    // if (context.url) {   
    //      res.redirect(303, context.url)
    // };

    const styles = sheet.getStyleTags();
    res.status(200).send(Template({
        markup: markup, 
        styles: styles})
    )
})

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