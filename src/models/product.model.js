import pool from "../../config/conexion.js";

// Obtener todos los productos
export const getAllProducts = async () => {
  const sql = "SELECT * FROM products";
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql);
    connection.release();
    return rows;
  } catch (error) {
    return error;
  }
};

// Obtener producto por ID
export const getProductById = async (id) => {
  const sql = "SELECT * FROM products WHERE id_product = ?";
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql, [id]);
    connection.release();
    return rows;
  } catch (error) {
    return error;
  }
};

// Crear nuevo producto
export const createProduct = async (values) => {
  const sql = "INSERT INTO products (name, description, price, stock, category, image) VALUES (?, ?, ?, ?, ?, ?)";
  const { name, description, price, stock, category, image } = values;
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql, [name, description, price, stock, category, image]);
    connection.release();
    return rows;
  } catch (error) {
    return error;
  }
};

// Actualizar producto
export const updateProduct = async (newValues, id) => {
  const sql = "UPDATE products SET ? WHERE id_product = ?";
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql, [newValues, id]);
    connection.release();
    return rows;
  } catch (error) {
    return error;
  }
};

// Eliminar producto
export const deleteProduct = async (id) => {
  const sql = "DELETE FROM products WHERE id_product = ?";
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql, [id]);
    connection.release();
    return rows;
  } catch (error) {
    return error;
  }
};
