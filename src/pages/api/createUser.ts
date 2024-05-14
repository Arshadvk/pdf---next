import { Request, Response } from "express"; // Assuming you're using Express for handling HTTP requests
import connectMongoDB from "src/libs/database";

async function handler(req: Request, res: Response) {

    try {
         connectMongoDB(); // Assuming connectMongoDB returns a Promise

        console.log("wew");
        res.status(200).json("he"); // Respond with the saved user
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        // Close the connection after handling the request
    }
}

export default handler;
