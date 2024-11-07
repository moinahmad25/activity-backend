import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

const db_url = process.env.DB_URL

const connectDB = async() => {
    try {
        await mongoose.connect(db_url)
        console.log("Connected Successfully!!!")
    } catch (error) {
        console.log("Connection failed!!!", error)
        process.exit(1)
    }
}

export default connectDB