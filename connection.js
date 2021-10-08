import mongoose from "mongoose";
import create from "./create.js";
import read from "./read.js";
import updateAnd from "./update.js";
import deleteUser from "./delete.js";
const { connection, Schema } = mongoose;

mongoose.connect("mongodb://classTester:1to5@localhost:27017/test");

const UserSchema = new Schema({
    email: {
        type: String,
        unique: "Email already exists",
    },
    password: {
        type: String,
        minLength: 8,
    },
    role: {
        type: String,
        enum: ["User", "Admin", "Editor"],
    },
});

connection.once("connected", async () => {
    try {
        // Create
        await creat();
        // Read
        await read();
        // Update
        await updateAnd();
        console.log(JSON.stringify(user, null, 4));
        // Delete
        await deleteUser();
    } catch (error) {
        console.dir(error.message, { colors: true });
    } finally {
        await connection.close();
    }
});

export default mongoose.model("Person", UserSchema);
