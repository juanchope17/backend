const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://pandaTV:pandatv@pandatv.bmfcmb9.mongodb.net/?retryWrites=true&w=majority&appName=PandaTV",
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Base de Datos conectada exitosamente a MongoDB");
});
