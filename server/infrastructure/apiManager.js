import userRoutes from "./../routes/user.routes"
import gistRoutes from "./../routes/gist.routes"
import ayozeRoutes from "./../routes/ayoze.routes";
import passwordResetRoutes from "./../routes/passwordReset"

const API = {
    createApiRouter (app) {
        app.use("/_v1", gistRoutes)
        app.use("/_v1", ayozeRoutes)
        app.use("/_v1", userRoutes)
        app.use("/_v1", passwordResetRoutes)
    }
}

export default API;
