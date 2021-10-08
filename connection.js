import mongoose from "mongoose";
import create from "./create.js";
import read from "./read.js";
import updateAnd from "./update.js";
import deleteUser from "./delete.js";
const { connect, connection } = mongoose;

connect("mongodb://classTester:1to5@localhost:27017/test");

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
        await connection.close();
    }
});
