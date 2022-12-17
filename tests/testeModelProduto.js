const { Produto, sequelize } = require('../database/models')

Produto.findAll()
.then(data => {
    console.log(JSON.parse(JSON.stringify(data))[0])
    // data.forEach(d => console.log(d.toJSON()))
    sequelize.close(); 
})