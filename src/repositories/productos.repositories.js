const { pool } = require('../db');//pendiente de revisar y hacer el db

class ProductosRepository{
    async getAllProductos() {
        const result = await pool.query(
            'select * from productos'
        );
        return result.rows;
    }

    async getById(id){
        const result = await pool.query(
            'select id, nombre, '
        )
    }
}
