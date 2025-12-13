<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
import {adminRouter} from "./Routes/AdminRoutes.js"

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

// -------------------- DATABASE --------------------
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "clientms",
  waitForConnections: true,
  connectionLimit: 10,
});

// -------------------- ADMIN LOGIN --------------------
app.post("/auth/adminlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM admin WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = rows[0];

    // Compare password (bcrypt)
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.json({ 
      message: "Login successful", 
      admin: user 
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// -------------------- FORGOT PASSWORD --------------------
app.post("/auth/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT id FROM admin WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.json({ message: "If email exists, reset link has been sent" });
    }

    const user = rows[0];

    const tokenRaw = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(tokenRaw).digest("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await pool.query(
      "DELETE FROM password_resets WHERE user_id = ?",
      [user.id]
    );

    await pool.query(
      "INSERT INTO password_resets (user_id, token_hash, expires_at) VALUES (?, ?, ?)",
      [user.id, tokenHash, expiresAt]
    );

    const resetLink = `http://localhost:3000/reset-password?token=${tokenRaw}&email=${email}`;

    return res.json({ message: "Reset link sent", link: resetLink });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// -------------------- RESET PASSWORD --------------------
app.post("/auth/reset-password", async (req, res) => {
  const { token, email, newPassword } = req.body;

  try {
    const [u] = await pool.query("SELECT id FROM admin WHERE email = ?", [
      email,
    ]);

    if (u.length === 0) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const userId = u[0].id;
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const [rows] = await pool.query(
      "SELECT * FROM password_resets WHERE user_id = ? AND token_hash = ? AND expires_at > NOW()",
      [userId, tokenHash]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    await pool.query("UPDATE admin SET password = ? WHERE id = ?", [
      hash,
      userId,
    ]);

    await pool.query("DELETE FROM password_resets WHERE user_id = ?", [
      userId,
    ]);

    return res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
=======
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
import {adminRouter} from "./Routes/AdminRoutes.js"

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

// -------------------- DATABASE --------------------
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "clientms",
  waitForConnections: true,
  connectionLimit: 10,
});

// -------------------- ADMIN LOGIN --------------------
app.post("/auth/adminlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM admin WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = rows[0];

    // Compare password (bcrypt)
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.json({ 
      message: "Login successful", 
      admin: user 
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// -------------------- FORGOT PASSWORD --------------------
app.post("/auth/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT id FROM admin WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.json({ message: "If email exists, reset link has been sent" });
    }

    const user = rows[0];

    const tokenRaw = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(tokenRaw).digest("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await pool.query(
      "DELETE FROM password_resets WHERE user_id = ?",
      [user.id]
    );

    await pool.query(
      "INSERT INTO password_resets (user_id, token_hash, expires_at) VALUES (?, ?, ?)",
      [user.id, tokenHash, expiresAt]
    );

    const resetLink = `http://localhost:3000/reset-password?token=${tokenRaw}&email=${email}`;

    return res.json({ message: "Reset link sent", link: resetLink });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// -------------------- RESET PASSWORD --------------------
app.post("/auth/reset-password", async (req, res) => {
  const { token, email, newPassword } = req.body;

  try {
    const [u] = await pool.query("SELECT id FROM admin WHERE email = ?", [
      email,
    ]);

    if (u.length === 0) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const userId = u[0].id;
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const [rows] = await pool.query(
      "SELECT * FROM password_resets WHERE user_id = ? AND token_hash = ? AND expires_at > NOW()",
      [userId, tokenHash]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    await pool.query("UPDATE admin SET password = ? WHERE id = ?", [
      hash,
      userId,
    ]);

    await pool.query("DELETE FROM password_resets WHERE user_id = ?", [
      userId,
    ]);

    return res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
>>>>>>> c4bff2ca761f2a0dd175b19db1e28b1d6b35c59e
