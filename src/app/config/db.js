import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://1270.0.0.1:27017/nextblog");
        console.log("MONGO GOT CONNECTED")
    } catch (error) {
        return NextResponse({
            message: "Database error"
        })
    }
}

export default connectDb;