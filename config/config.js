const CONFIG = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 4006,
    jwtSecret: process.env.JWT_SECRET || "2fdDFG3353eegdDGGFHDGJvf",
    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || "mongodb://localhost:27017/onstreet"
};

export default CONFIG;