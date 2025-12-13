app.post("/auth/adminlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM admin WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.json({ message: "Login successful", admin: rows[0] });

  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});
