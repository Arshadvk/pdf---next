import { Request, Response } from "express"; // Assuming you're using Express for handling HTTP requests
import connectMongoDB from "src/libs/database";
import { userModel } from "src/models/user";
import jwt from "jsonwebtoken";

async function handler(req: Request, res: Response) {
    const { token}:any = req.query;
    try {
       connectMongoDB(); // Ensure the database is connected
      
       const decodedToken :any = jwt.decode(token);

    const Newuser = await userModel.find({status: "pending" , emirates : decodedToken?.emirates})
    res.status(200).json(Newuser); // Respond with the saved user
    // disconnetMongoDB()
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
  }
}

export default handler;
