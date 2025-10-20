import pool from "../../config/conexion.js";
import * as Model from "../models/users.model.js";


export const getAllUsers = async (req, res) => {
const rows = await Model.getAllUsers()
if (rows.errno){
    return res.status(500).send("error con la consulta"+"\n Codigo de error: "+rows.errno)
}
 (rows.length > 0) ? res.json(rows) : res.status(500).send("No hay usuarios");
 // res.status(500).send("error con la consulta")
};

export const getUserById = async (req, res) => {
    const id = req.params.id;
    const rows = await Model.getUserById(id)
    if (rows.errno){
    return res.status(500).send("error con la consulta"+"\n Codigo de error: "+rows.errno)
    }
     (rows.length > 0) ? res.json(rows[0]) : res.status(500).send("No hay usuarios");
    //rows[0] ? res.json(rows[0]) : res.status(404).send("El usuario no existe");  
};

export const createUser = async (req, res) => {
    const id = req.params.id;
    const values = req.body;
    const rows = await Model.createUser(values)
    console.log(values);
    if(rows.errno){
    return res.status(500).send("error con la consulta"+"\n Codigo de error: "+rows.errno)
    }
    res.status(201).send("Usuario creado con el id: " + rows.insertId);
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const newValues = req.body;
    const rows = await Model.updateUser(newValues, id)
     if(rows.errno){

     }
        rows.affectedRows === 0
            ? res.status(404).send("El usuario no existe")
            : res.send("Datos actualizados");

};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM users WHERE ID_User = ?";
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(sql, [id]);
        connection.release();
        rows.affectedRows === 0
            ? res.status(404).send("El usuario no existe")
            : res.send("Usuario eliminado");
    } catch (error) {
        res.status(500).send("error con la consulta");
    }
};