import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter, matchPath} from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import routes from "./route.config"
import express from "express";

import MainRouter from "./../../client/MainRouter"
import Template from "./../template";

const client = {
    createPageRouter() {
        const router = express.Router();
        
        router.get('*', (req, res)=> {
            const sheet = new ServerStyleSheet();

            const promises = [];
            let matched;

            routes.some(route => {
                const match = matchPath(req.path, route);
                matched = match;
                if (match) promises.push(route.loadData(match, req));
                return match;
            })

            Promise.all(promises)
            .then(function (responses) {
                // Get a BUFFER object from each of the responses
                return Promise.all(responses.map(function (response) {
                    return response.buffer();}))
            })
            .then(values=>{
                return values[0]
            })
            .then(body => {
                const markup = this.render(req, body, sheet)
                let URL = "unkg"
                URL = matched && matched.url.replace("/", '')

                const styles = sheet.getStyleTags();

                res.status(200).send(Template({
                    where: URL,
                    context: body,
                    markup: markup, 
                    styles: styles})
                );

            })
        })

        return router
    },

    render(req, data, sheet) {
        const context = {};
        
        //const additionalProps = {context: JSON.parse(data)};

        /**
         *  Don't make my reload work,
         *  I don't know why
         * */
        // if (context.url) {   
        //     return res.redirect(303, context.url)
        // };
        const html = renderToString(
            sheet.collectStyles(
            <StaticRouter 
                location={req.url} 
                context={context}>
                <MainRouter />
            </StaticRouter>
            )
        );
        return html;
    }
}

export default client;