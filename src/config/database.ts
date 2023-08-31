import mongoose from "mongoose"
import { config } from "dotenv"
config()

mongoose.Promise = global.Promise

const db_url = process.env.MONGO_URL || ""

const connect = async () => {
  try {
    await mongoose.connect(db_url)
    console.log("Connect sucessfully")
  } catch (err) {
    console.log(err)
  }
}

export default connect
