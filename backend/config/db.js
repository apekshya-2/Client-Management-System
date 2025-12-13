<<<<<<< HEAD
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientms"
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("DB Connected!");
});

export default db;
=======
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientms"
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("DB Connected!");
});

export default db;
>>>>>>> c4bff2ca761f2a0dd175b19db1e28b1d6b35c59e
