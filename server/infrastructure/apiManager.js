import userRoutes from "./../routes/user.routes"
import authRoutes from "./../routes/auth.routes"
import gistRoutes from "./../routes/gist.routes"
import ayozeRoutes from "./../routes/ayoze.routes";

const API = {
    createApiRouter (app) {
        app.use("/_v1", authRoutes)
        app.use("/_v1", gistRoutes)
        app.use("/_v1", ayozeRoutes)
        app.use("/_v1", userRoutes)
    }
};

export default API;