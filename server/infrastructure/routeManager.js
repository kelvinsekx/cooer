import baseManager from "./baseManager";

import API from "./apiManager"

const newManager =  {
    configureDevEnv(app) {
        const apiRouter = API.createApiRouter;
        apiRouter(app)
    }
}

const routeManager = 
Object.assign({}, baseManager, newManager);

export default routeManager;

