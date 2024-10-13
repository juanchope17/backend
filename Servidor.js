const express = require("express");
require("./db/db-connection-mongo");
require("dotenv").config();
const cors = require("cors");
const tipoR = require("./routes/TipoR");
const mediaR = require("./routes/MediaR");
const productoraR = require("./routes/ProductoraR");
const generoR = require("./routes/GeneroR");
const directorR = require("./routes/DirectorR");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:4321",
  }),
);

async function main() {
  await app.listen(5001);
  console.log(`Server on port 5001, Congratulations`);
}

app.get("/", (req, res) => {
  res.send("servidor prendido");
});

app.use("/api/tipo", tipoR);
app.use("/api/productora", productoraR);
app.use("/api/genero", generoR);
app.use("/api/director", directorR);
app.use("/api/media", mediaR);

main();
