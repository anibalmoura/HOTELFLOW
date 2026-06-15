const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

let events = [];

router.post("/", auth, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Apenas admin pode criar eventos" });
  }

  const newEvent = req.body;
  events.push(newEvent);

  res.json({ message: "Evento criado", events });
});

router.get("/", (req, res) => {
  res.json(events);
});

module.exports = router;