import pool from '../../config/conexion.js';
export const getAllUsers = async () => {
    const sql = "SELECT * FROM users";
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection
            .query(sql);
        connection.release();
        //res.json(rows);
        return rows
    } catch (error) {
       // res.status(500).send("error con la consulta");
       return error
    }
}

export const getUserById = async (id) => {
const sql = "SELECT * FROM users WHERE ID_User = ?";  
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(sql, [id]);
        connection.release();
        return rows
    } catch (error) {
        return error
    }
}

export const createUser = async (values) => {
    const sql = "INSERT INTO users SET ?";
    try {
        const connection = await pool.getConnection();
        const rows = await connection.query(sql, [values]);
        connection.release();
        return rows 
    } catch (error) {
        return error
    }
}

export const updateUser = async (newValues, id) => {
    const connection = await pool.getConnection();
    const sql = "UPDATE users SET ? WHERE ID_User = ?";
    try {
        connection.release();
        return rows
    } catch (error) {
        return error
    }}