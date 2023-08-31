import { Request, Response } from "express"
import User from "@/models/user"

export default class UserController {
  public static async register(req: Request, res: Response) {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })

    try {
      await user.save()
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json({ error: "Error saving user" })
    }
  }
}
