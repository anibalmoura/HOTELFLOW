const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

const users = [
  {
    id: 1,
    username: "admin",
    password: "$2a$10$COLE_AQUI_O_HASH",
    role: "admin"
  }
];

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: "Usuário inválido" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ message: "Senha inválida" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "SEGREDO_SUPER_SECRETO",
    { expiresIn: "1d" }
  );

  res.json({
    token,
    user: { username: user.username, role: user.role }
  });
});

module.exports = router;