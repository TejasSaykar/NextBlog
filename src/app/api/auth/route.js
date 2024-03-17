import connectDb from "@/app/config/db";
import userModel from "@/app/models/userModel";
import { NextResponse } from "next/server"


export const POST = async (request) => {
    await connectDb();
    try {
        const body = await request.json();
        const user = new userModel(body);
        const savedUser = await user.save();
        return new NextResponse.json({
            "message": "Register successful",
            "user": savedUser
        }, { status: 201 });

    } catch (error) {
        return new NextResponse.json({
            "message": "Error while login",
        }, { status: 500 })
    }
}

export const GET = async (request) => {
    await connectDb();
    try {
        const users = await userModel.find();
        return NextResponse.json({ "users": users })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 });
    }
}