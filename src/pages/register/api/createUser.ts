import { Request, Response } from "express";


async function handler(req: Request, res: Response) {
    try {
        if (req.method != "POST") {
            console.log(req);
            console.log("req");

            return res.status(405).send("Method Not Allowed");
        }



        // const newUser = new userModel(req.body);
        // await newUser.save();
        console.log("New user created:");
        res.status(200).json('newUser');
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default handler;
