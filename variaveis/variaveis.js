import { mostrar_texto, obter_numero_positivo, obter_string } from "./funcoes_utils.js"

function main() {
    let num_de_variaveis = obter_numero_positivo('\nInsira o numero de snake_cases que deseja transformar: ')
    let simples = 0
    let compostos = 0

    let contador = 0

    while (contador < num_de_variaveis) {
        let snake_case = obter_string('\nInsira um nome de variavel em snake_case: ')
        let eh_composto = eh_ou_nao_composto(snake_case)
        let camelCase = transformar_em_camel_case(snake_case)

        mostrar_texto(`\nDe ${snake_case}, para ${camelCase}.`)

        if (eh_composto === true) {
            compostos++
        }
        else {
            simples++
        }

        contador++
    }

    mostrar_texto(`\nForam ${compostos} nomes compostos e ${simples} simples.`)
}


function transformar_em_camel_case(snake_case) {
    let camelCase = ''
    let devo_mudar_pra_maiusculo = false

    for (let index in snake_case) {

        if (snake_case[index] != '_') {

            if (devo_mudar_pra_maiusculo === true) {
                let caractere_transformado = mudar_pra_maiusculo(snake_case[index])
                camelCase += caractere_transformado
            }

            if (devo_mudar_pra_maiusculo === false) {
                camelCase += snake_case[index]
            }

            devo_mudar_pra_maiusculo = false
        }

        else {
            devo_mudar_pra_maiusculo = true
        }
    }

    return camelCase
}


function eh_ou_nao_composto(snake_case) {
    let composto = false

    for (const caractere of snake_case) {
        if (caractere === '_') {
            return true
        }
    }

    return false
}


function mudar_pra_maiusculo(caractere) {
    let codigo = caractere.charCodeAt(0)

    if (codigo >= 97 && codigo <= 122) {
        return String.fromCharCode(codigo - 32)
    }

    else {
        return caractere
    }

}


main()