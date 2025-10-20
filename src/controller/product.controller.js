import * as Model from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  const rows = await Model.getAllProducts();
  if (rows.errno) {
    return res.status(500).send("Error con la consulta\nCódigo de error: " + rows.errno);
  }
  rows.length > 0 ? res.json(rows) : res.status(404).send("No hay productos");
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const rows = await Model.getProductById(id);
  if (rows.errno) {
    return res.status(500).send("Error con la consulta\nCódigo de error: " + rows.errno);
  }
  rows.length > 0 ? res.json(rows[0]) : res.status(404).send("El producto no existe");
};

export const createProduct = async (req, res) => {
  const values = req.body;
  const rows = await Model.createProduct(values);
  if (rows.errno) {
    return res.status(500).send("Error con la consulta\nCódigo de error: " + rows.errno);
  }
  res.status(201).send("Producto creado con el id: " + rows.insertId);
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const newValues = req.body;
  const rows = await Model.updateProduct(newValues, id);
  if (rows.errno) {
    return res.status(500).send("Error con la consulta\nCódigo de error: " + rows.errno);
  }
  rows.affectedRows === 0
    ? res.status(404).send("El producto no existe")
    : res.send("Datos del producto actualizados");
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const rows = await Model.deleteProduct(id);
  if (rows.errno) {
    return res.status(500).send("Error con la consulta\nCódigo de error: " + rows.errno);
  }
  rows.affectedRows === 0
    ? res.status(404).send("El producto no existe")
    : res.send("Producto eliminado correctamente");
};
