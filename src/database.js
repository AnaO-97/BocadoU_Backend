const mongoose = require("mongoose");
const { USER_MONGO, PASSWORD_MONGO, DB_NAME_MONGO } = process.env;

const dataBaseAtlas = async () => {
    const URL_MONGO_ATLAS = `mongodb+srv://${USER_MONGO}:${PASSWORD_MONGO}@cluster0.1zm6myw.mongodb.net/${DB_NAME_MONGO}?retryWrites=true&w=majority`;
    await mongoose.connect(URL_MONGO_ATLAS,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Connected to MongoAtlas"))
        .catch((error) => console.log(error))
};

module.exports = dataBaseAtlas;