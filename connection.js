import mongoose from "mongoose";

const port = process.env.PORT || 3000;

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
    await setTimeout(() => {
        mongoose.disconnect();
    }, 3000);
};
export { port, connection, disconnection };
