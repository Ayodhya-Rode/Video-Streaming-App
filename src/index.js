
// Load environment variables from .env file
import dotenv from "dotenv";

// Configure dotenv to load variables from the .env file
dotenv.config({path: "./.env"});

import connectDB from "./db/db.js";

connectDB()












/*
    // 1st approach to connect to MongoDB and start Express server

import express from "express";
const app = express();

(async () => {
    try {
        // Connect to MongoDB 
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // Check the Express server errors
        app.on("error", (error)=>{
            console.error("Error in Express app:", error);
            throw error;
        })
        // Start the Express server
        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`);

        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})()
*/