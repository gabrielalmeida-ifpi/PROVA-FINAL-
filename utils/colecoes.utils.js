export function contem_na_colecao(item, colecao) {
    for (let elemento of colecao) {
        if (item === elemento) {
            return true
        }
    }

    return false
}


export function criar_vetor_automatico(tamanho, limite_minimo, limite_maximo) {
    const vetor = Array(tamanho)
    let item_novo = 0

    for (let i = 0; i < tamanho; i++) {
        item_novo = Math.floor(Math.random() * (limite_maximo - limite_minimo) + limite_minimo)
        vetor[i] = item_novo
    }

    return vetor
}


export function primos_no_vetor(vetor) {
    let vetor_de_primos = []

    for (const elemento of vetor) {
        if (eh_primo(elemento) === true) {
            vetor_de_primos.push(elemento)
        }
    }

    return vetor_de_primos
}


function eh_primo(numero) {
    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false
        }
    }

    return true
}