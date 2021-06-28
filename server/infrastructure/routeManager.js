import baseManager from "./baseManager";

import API from "./apiManager"
import client from "./clientManager";

const newManager =  {
    configureDevEnv(app) {
        const apiRouter = API.createApiRouter;
        const pagesRouter = client.createPageRouter();
        apiRouter(app)
        app.use("/", pagesRouter)
    }
}

const routeManager = 
Object.assign({}, baseManager, newManager);

export default routeManager;

