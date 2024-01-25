import { } from "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import routeAuthenticate from "./Src/Route/Authenticate.js"

const app = express()

const port = process.env.port || 3005


app.use(express.json())
app.use(routeAuthenticate)


app.listen(process.env.port, () => console.log(`Server is open on ${port}`))

mongoose.connect(process.env.mongoDB, console.log('connect DB'))