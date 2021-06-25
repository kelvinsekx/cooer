import express from "express";

import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

const fetch = require("node-fetch")

import MainRouter from "./../../client/MainRouter"

import Template from "./../template";
import baseManager from "./baseManager";

import API from "./apiManager"
const {createApiRouter}  = API;

// class AugmentedRoutingContext extends __RouterContext {
//     createElement(component, props) {
//         const context = this.props.context;
//         return component == null ? null : this.props.createElement(component, {...props, ...{context}});
//     }
// }

const newManager =  {
    configureDevEnv(app) {
        const apiRouter = this.createApiRouter;
        const pagesRouter = this.createPageRouter();
        apiRouter(app)
        app.use("/", pagesRouter)
    },

    createApiRouter,
    
    createPageRouter() {
        const router = express.Router();

        // each component carries a promise that retrieves its data
        // const {promises, components} = this.mapComponentsToPromises(
        //     renderProps.components, renderProps.params);
        //     // when all promises are resolved, process data
        //     Promise.all(promises).then((values) => {
        //         // create map of [component name -> component data]
        //         const data = this.prepareData(values, components);
        //         // render HTML
        //         const html = this.render(data, renderProps);
        //         // send HTML and the map to the browser
        //         res.render('index', {
        //             content: html,
        //             context: JSON.stringify(data)
        //         });

        router.get('*', (req, res)=> {
            const sheet = new ServerStyleSheet();

             fetch("http://localhost:4006/_v1/api/gists/feed/kelvin97")
            //Promise.all(promises)
            // .then(values=>{
            //     const data = this.prepareData(values, components);
            //     return data
            // })
            .then(res=> res.buffer())
            .then(body => {
                const markup = this.render(req, body, sheet)

                const styles = sheet.getStyleTags();

                res.status(200).send(Template({
                    context: body,
                    markup: markup, 
                    styles: styles})
                )
            })
        })

        return router
    },

    // some components define a `requestData` static method that returns promise;
     // skip the rest
     mapComponentsToPromises(components, params) {
        const filteredComponents = components.filter((Component) => {
            return (typeof Component.requestData === 'function');
        });

        const promises = filteredComponents.map(function(Component) {
            return Component.requestData(params, nconf.get('domain'));
        });

    return {promises, components: filteredComponents};
    },

    // create component name -> component data map
    prepareData(values, components) {
        const map = {};

        values.forEach((value, index) => {
            map[components[0].NAME] = value.data;
        });

    return map;
    },

    render(req, data, sheet) {
        const context = data;
        
        //const additionalProps = {context: JSON.parse(data)};

        /**
             *  Don't make my reload work,
             *  I don't know why 
             * 
             * */
            // if (context.url) {   
            //      res.redirect(303, context.url)
            // };
        const html = renderToString(
            sheet.collectStyles(
                <StaticRouter 
                    location={req.url} 
                    context={{context}}>
                <MainRouter />
            </StaticRouter>
            )
        );
        return html;
    }
}

const routeManager = 
Object.assign({}, baseManager, newManager);

export default routeManager;

