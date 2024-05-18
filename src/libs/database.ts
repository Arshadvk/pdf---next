import mongoose from "mongoose";

const connectMongoDB = () =>{
    try {
        mongoose.connect(process.env.MONGODB_CONNECTION_URL || "mongodb://localhost:27017/pcf");
        console.log(" Connected to MongoDB");

    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB


