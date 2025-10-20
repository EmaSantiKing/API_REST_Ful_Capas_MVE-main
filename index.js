import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

import usersRoutes from "./src/routes/users.routes.js";
app.use(usersRoutes);

import productRoutes from "./src/routes/product.routes.js";
app.use(productRoutes);

app.get("/", (req, res) => {
  res.send("API_REST_Ful_MySQL");
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("Pagina no existe");
});