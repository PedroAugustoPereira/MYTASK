import mongoose from "mongoose"
import { hash } from "bcrypt"

interface mongooseModel extends mongoose.Document {
  name: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}

const userSchema = new mongoose.Schema<mongooseModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
})

userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    hash(
      this.password,
      10,
      (err: mongoose.CallbackError | undefined, hashedPassword: string) => {
        if (err) {
          return next(err)
        } else {
          this.password = hashedPassword
          return next()
        }
      },
    )
  }
})

export default mongoose.model("User", userSchema)
