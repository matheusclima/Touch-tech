
module.exports = {
    index: (req, res) => {
        let quantidadePorPagina = req.query.exibir ? parseInt(req.query.exibir) : 10
        console.log(quantidadePorPagina)
        res.render('listaProdutos.ejs', { quantidadePorPagina })
    }
}