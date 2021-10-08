import Person from "./user.js";

const read = async () => {
    try {
        let users = await Person.find().select("email and role");
        console.log(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default read;
