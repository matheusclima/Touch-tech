function alterarQuantidade() {
    let form = document.getElementById("form--quantidade")
    let select = document.getElementById("select--quantidade")
    form.submit()
    for(let option of select.options) {
        if(option.value == select.value) {
            option.selected = true
        } else {
            option.selected = false
        }
    }
}