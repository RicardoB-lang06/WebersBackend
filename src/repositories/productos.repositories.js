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
            'select id, nombre, fecha_entrega from where id = $1;',[id]
        );
        return result.rows[0];
    }
}

module.exports = { ProductosRepository }