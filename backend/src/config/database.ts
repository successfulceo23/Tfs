import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect(Bun.env.MONGODB_URL as string);
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1)//exit with failure

    }
}