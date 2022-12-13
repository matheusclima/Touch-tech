const sequelize = require('sequelize')
const config = require('./config')
const conexao = new sequelize(config)

let promise = conexao.query('SELECT * FROM fabricantes LIMIT 1', { type: sequelize.QueryTypes.SELECT })

promise.then(data => {
        conexao.close()
        console.log(data)
    }).catch(err => {
        console.log('Conexão com o banco falhou')
    })

console.log(promise)