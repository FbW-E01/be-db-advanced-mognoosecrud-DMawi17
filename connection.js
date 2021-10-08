import mongoose from "mongoose";

const connection = async () => {
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

const disconnection = async () => {
    await mongoose.disconnect();
};

export { connection, disconnection };
