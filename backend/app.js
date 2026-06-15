const users = [
  {
    id: 1,
    username: "admin",
    password: "$2b$10$UJCFHJ0FSl/vk5Hd7fEXB.wxEph9/C1OdPoi6lGjnaW9DrmAbScAe",
    role: "admin"
  }
];


const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);

app.listen(3000, () => console.log("Servidor rodando"));