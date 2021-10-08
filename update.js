import Person from "./user.js";

const update = async () => {
    try {
        let user = await Person.findOne({ email: "Shannon.Carter@gmail.com" });
        if (!user) console.error("User not found");
        Object.assign(user, { email: "Meda_Lockman76@gmail.com" });
        await user.save();
    } catch (err) {
        console.error(err);
    }
};

export default update;
