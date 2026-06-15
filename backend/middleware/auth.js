const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "Sem token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "SEGREDO_SUPER_SECRETO");
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
}

module.exports = auth;