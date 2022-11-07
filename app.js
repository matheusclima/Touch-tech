const express = require('express');
const ProdutosRouter = require('./routers/ProdutosRouter')
const LoginRouter = require('./routers/LoginRouter')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.use('/produtos', ProdutosRouter)

app.use('/login', LoginRouter)


app.listen(3000, console.log('Servidor rodando na porta 3000'));