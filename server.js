// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { connection, disconnection } from "./connection.js";
// import create from "./create.js";
// import read from "./read.js";
// import updateAnd from "./update.js";
// import deleteUser from "./delete.js";

// dotenv.config();

// connection();
// mongoose.connection.on("connected", () => {
//     console.log(`\nConnected to database\n`);
// });
// mongoose.connection.on("error", () => {
//     throw new Error(`unable to connect to database`);
// });

// await create();
// await read();
// await updateAnd();
// await deleteUser();

// disconnection();
// mongoose.connection.on("disconnected", () => {
//     console.log(`Disconnected from the database`);
// });
