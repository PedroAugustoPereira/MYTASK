import mongoose from "mongoose"

interface notes extends mongoose.Document {
  title: string
  body: string
  done: boolean
  deadline?: Date | null
  createdAt: Date
  updatedAt: Date
  author: mongoose.Schema.Types.ObjectId
}

const noteSchema = new mongoose.Schema<notes>({
  title: { type: String, required: true },
  body: { type: String, required: false },
  done: { type: Boolean, required: true, default: false },
  deadline: { type: Date, default: null, required: false },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

export default mongoose.model("Note", noteSchema)
