import mongoose from "mongoose";
import dotenv from "dotenv";
import { connection, disconnection } from "./connection.js";
// import create from "./create.js";
import read from "./read.js";
import update from "./update.js";

dotenv.config();

connection();
mongoose.connection.on("connected", () => {
    console.log(`Connected to database`);
});
mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database`);
});
// ***

// await create();
await update();
await read();

// ***
disconnection();
mongoose.connection.on("disconnected", () => {
    console.log(`Disconnected from the database`);
});
