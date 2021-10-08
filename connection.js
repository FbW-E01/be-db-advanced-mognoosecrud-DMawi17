import mongoose from "mongoose";

const conn = async () => {
    const mongoUri =
        "mongodb://" +
        process.env.DB_USER +
        ":" +
        process.env.DB_PASS +
        "@" +
        process.env.DB_HOST +
        "/" +
        process.env.DB_NAME;

    await mongoose.connect(mongoUri);
};

const disConn = async () => {
    await mongoose.disconnect();
};

export { conn, disConn };
