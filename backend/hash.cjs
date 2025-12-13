const bcrypt = require("bcryptjs");

async function hashPassword() {
  const password = "12345"; //  original password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log("HASHED PASSWORD:");
  console.log(hash);
}

hashPassword();
