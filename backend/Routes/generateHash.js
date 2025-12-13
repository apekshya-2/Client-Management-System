<<<<<<< HEAD
const bcrypt = require("bcrypt");

async function generateHash() {
    const hash = await bcrypt.hash("12345", 10);
    console.log(hash);
}
generateHash();
=======
const bcrypt = require("bcrypt");

async function generateHash() {
    const hash = await bcrypt.hash("12345", 10);
    console.log(hash);
}
generateHash();
>>>>>>> c4bff2ca761f2a0dd175b19db1e28b1d6b35c59e
