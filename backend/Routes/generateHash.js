const bcrypt = require("bcrypt");

async function generateHash() {
    const hash = await bcrypt.hash("12345", 10);
    console.log(hash);
}
generateHash();
