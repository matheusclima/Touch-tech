const { Categoria, sequelize } = require('../database/models')

Categoria.findByPk('1')
.then(data => {
    console.log(JSON.parse(JSON.stringify(data))[0])
    // data.forEach(d => console.log(d.toJSON()))
    sequelize.close(); 
})