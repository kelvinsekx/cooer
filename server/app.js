import express from "express";
import app from "./express";



const serverStarter = async ()=>{
	const APP = express()
  	return app(APP);
}

export default serverStarter()
