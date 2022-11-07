const express = require('express');
const ProdutosRouter = require('./routers/ProdutosRouter')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.use('/produtos', ProdutosRouter)

app.get('/', (req, res) => {
    res.render('home.ejs')
});


app.listen(3000, console.log('Servidor rodando na porta 3000'));