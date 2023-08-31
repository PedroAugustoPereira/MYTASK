import * as express from "express"
import { config } from "dotenv"
import connect from "@/config/database"

config()

//Import Routes
import Home from "@/routes/Home"
import User from "@/routes/User"

const app = express()

//Middlwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes congif
app.use("/", Home)
app.use("/", User)

//Running server
const port = process.env.PORT || 8000

app.listen(port, async () => {
  console.log("Listening on port 3000")
  await connect()
})
