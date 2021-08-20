import userRoutes from "./../routes/user.routes"
import gistRoutes from "./../routes/gist.routes"
import ayozeRoutes from "./../routes/ayoze.routes"
import authRoutes from "./../routes/auth.routes"
import passwordResetRoutes from "./../routes/passwordReset"

//graphql...
// in the building...
import {graphqlHTTP} from "express-graphql"
import schema from "./../../graph/graphSchema.graphql"

const API = {
    createApiRouter (app) {
        app.use("/_v1", authRoutes)
        app.use("/graphql", graphqlHTTP({
            schema,
            graphiql : true,
        }))
        app.use("/_v1", gistRoutes)
        app.use("/_v1", ayozeRoutes)
        app.use("/_v1", userRoutes)
        app.use("/_v1", passwordResetRoutes)
    }
}

export default API;
