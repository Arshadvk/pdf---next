import { Request, Response } from "express"; // Assuming you're using Express for handling HTTP requests
import connectMongoDB from "src/libs/database";
import { adminModel } from "src/models/admin";

async function handler(req: Request, res: Response) {

  try {
    if(req.method != "POST"){
      res.status(500).json({ error: "Internal Server Error" });

    }
    connectMongoDB(); // Assuming connectMongoDB returns a Promise
    console.log(req.body)
    const Newuser = await adminModel.create(req.body)
    console.log(Newuser)
    res.status(200).json(Newuser); // Respond with the saved user
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
}

export default handler;
