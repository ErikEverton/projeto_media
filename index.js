function calcular() {
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let nota3 = document.getElementById('nota3')
    let res = document.getElementById('res')

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)

    if (n1 > 0 && n2 > 0 || n2 > 0 && n3 > 0 || n1 > 0 && n3 > 0) {
        let media = (n1 + n2 + n3) / 3
        res.innerHTML = " "
        res.innerHTML += `Sua media é: ${media.toFixed(2)}`
    } else {
        res.innerHTML = "Por favor selecione os dados e tente novamente"
    }
}