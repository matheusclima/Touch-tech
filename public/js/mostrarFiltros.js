let botaoMostrarFiltro = document.querySelector(".mostrar--filtros")
let modalFiltros = document.querySelector(".filtros--container")
let fecharFiltros = document.querySelector(".fechar--filtros")
let main = document.querySelector("main")

botaoMostrarFiltro.addEventListener("click", () => {
    modalFiltros.style.display = "block"
    main.style.position = "fixed"

})

fecharFiltros.addEventListener("click", () => {
    modalFiltros.style.display = "none"
    main.style.position = "relative"
})

window.addEventListener("click", (event) => {

    if (event.target == modalFiltros && window.innerWidth < 1024) {
        main.style.position = "relative"
        modalFiltros.style.display = "none"
    }
})
