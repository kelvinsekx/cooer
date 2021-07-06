const CONFIG = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 4066,
    jwtSecret: process.env.JWT_SECRET || "2fdDFG3353eegdDGGFHDGJvf",
    mongoUri:   "mongodb+srv://utdkelvin:kukuejubola1997@cluster0.zbmj6.mongodb.net/socmedia?retryWrites=true&w=majority", 
    mongoUriDev: "mongodb://localhost:27017/cooer"
};

export default CONFIG;