const express = require("express");
const sequelize = require("./config/database");
const { User, Post } = require("./models");
const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", studentRoutes);

const PORT = 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync();
    console.log("Database tables created successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

startServer();