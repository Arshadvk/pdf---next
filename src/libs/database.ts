import mongoose from "mongoose";

const connectMongoDB = () =>{
    try {
        mongoose.connect(process.env.MONGODB_CONNECTION_URL || "");
        console.log(" Connected to MongoDB");

    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB