const { Fabricante, sequelize } = require('../database/models')

Fabricante.findAll({
    include: ['produtos']
})
.then(data => {
    console.log(JSON.parse(JSON.stringify(data))[0])
    // data.forEach(d => console.log(d.toJSON()))
    sequelize.close(); 
})