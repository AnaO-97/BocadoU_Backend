require('dotenv').config();
const { PORT } = process.env;

const app = require("./src/app");
const dataBaseAtlas = require("./src/database");

app.listen(PORT, async() => {
    await dataBaseAtlas();
    console.log(`Server on port: http://localhost:${PORT}`);
});