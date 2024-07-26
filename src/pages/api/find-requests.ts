import { Request, Response } from "express"; // Assuming you're using Express for handling HTTP requests
import connectMongoDB from "src/libs/database";
import { userModel } from "src/models/user";

async function handler(req: Request, res: Response) {

  try {
    connectMongoDB()// Assuming connectMongoDB returns a Promise


    const Newuser = await userModel.find({status: "verified"})
    
    res.status(200).json(Newuser); // Respond with the saved user
    // disconnetMongoDB()
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
  }
}

export default handler;
