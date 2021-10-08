import mongoose from "mongoose";
import dotenv from "dotenv";
import { conn, disConn } from "./connection.js";
import create from "./create.js";
import read from "./read.js";
import updateAnd from "./update.js";
import deleteUser from "./delete.js";

const { connection } = mongoose;

dotenv.config();
conn();

connection.on("connected", () => {
    console.log(`\nConnected to database\n`);
});
connection.on("error", () => {
    throw new Error(`unable to connect to database`);
});
connection.on("disconnected", () => {
    console.log(`Disconnected from the database`);
});

connection.once("connected", async () => {
    try {
        await create();
        await read();
        await updateAnd();
        await deleteUser();
    } catch (error) {
        console.dir(error.message, { colors: true });
    } finally {
        await disConn();
    }
});
