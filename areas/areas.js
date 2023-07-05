import { mostrar_texto, obter_numero_positivo, obter_string } from "./funcoes_utils.js"

function main() {
    menu_de_opcoes()

    //Variáveis Figura A

    let comprimento_a
    let largura_a
    let altura_a
    let base_a
    let lado_a
    let base_maior_a
    let base_menor_a
    let raio_a

    //

    let figura_a = escolher_figura_valida()

    if (figura_a === 'Q') {
        lado_a = obter_numero_positivo('Lado: ')
    }

    if (figura_a === 'R') {
        comprimento_a = obter_numero_positivo('Comprimento: ')
        largura_a = obter_numero_positivo('Largura: ')
    }

    if (figura_a === 'T') {
        altura_a = obter_numero_positivo('Base: ')
        base_a = obter_numero_positivo('Altura: ')
    }

    if (figura_a === 'Z') {
        base_maior_a = obter_numero_positivo('Base Maior: ')
        base_menor_a = obter_numero_positivo('Base Menor: ')
        altura_a = obter_numero_positivo('Altura: ')
    }

    if (figura_a === 'C') {
        raio_a = obter_numero_positivo('Raio: ')
    }

    //Variáveis Figura B

    let comprimento_b
    let largura_b
    let altura_b
    let base_b
    let lado_b
    let base_maior_b
    let base_menor_b
    let raio_b

    //

    let figura_b = escolher_figura_valida(figura_a)

    if (figura_b === 'Q') {
        lado_b = obter_numero_positivo('Lado: ')
    }

    if (figura_b === 'R') {

        comprimento_b = obter_numero_positivo('Comprimento: ')
        largura_b = obter_numero_positivo('Largura: ')

    }

    if (figura_b === 'T') {

        altura_b = obter_numero_positivo('Altura: ')
        base_b = obter_numero_positivo('Base: ')

    }

    if (figura_b === 'Z') {
        base_maior_b = obter_numero_positivo('Base Maior: ')
        base_menor_b = obter_numero_positivo('Base Menor: ')
        altura_b = obter_numero_positivo('Altura: ')
    }

    if (figura_b === 'C') {
        raio_b = obter_numero_positivo('Raio: ')
    }
    
    let nome_a = obter_nome_da_figura(figura_a)
    let nome_b = obter_nome_da_figura(figura_b)

    mostrar_texto(`As duas figuras escolhidas foram: ${nome_a} e ${nome_b}.\n`)

    let area_a = calcular_areas(figura_a, comprimento_a, largura_a, altura_a, base_a, lado_a, base_maior_a, base_menor_a, raio_a)
    let area_b = calcular_areas(figura_b, comprimento_b, largura_b, altura_b, base_b, lado_b, base_maior_b, base_menor_b, raio_b)

    mostrar_texto(`Área do ${nome_a}: ${area_a}`)
    mostrar_texto(`Área do ${nome_b}: ${area_b}`)

    if (area_a > area_b) {
        mostrar_texto(`A Figura 1, um ${nome_a}, tem a maior área.`)

        let proporcao_b_em_a = calcular_proporcao(area_b, area_a)

        mostrar_texto(`O ${nome_b} tem ${proporcao_b_em_a}% da área do ${nome_a}\n`)
    }
    
    else if (area_b > area_a) {
        mostrar_texto(`A Figura 2, um ${nome_b}, tem a maior área.`)

        let proporcao_a_em_b = calcular_proporcao(area_a, area_b)

        mostrar_texto(`O ${nome_a} tem ${proporcao_a_em_b}% da área do ${nome_b}.\n`)
    }
}


function menu_de_opcoes() {

    let menu = `    ***** Figuras Disponíveis: Escolha Duas *****
                Q = Quadrado
                R = Retângulo
                T = Triângulo
                Z = Trapézio
                C = Círculo \n`

    return mostrar_texto(menu)

}


function escolher_figura_valida(figura_a) {
    let figuras_disponiveis = ['Q', 'R', 'T', 'Z', 'C']
    let figura_escolhida = obter_string(">>> ")

    if (contem_na_colecao(figura_escolhida, figuras_disponiveis) === false || figura_escolhida === figura_a) {
        mostrar_texto('VOCÊ SELECIONOU UMA FIGURA INVÁLIDA OU JÁ SELECIONADA. TENTE NOVAMENTE.')
        figura_escolhida = escolher_figura_valida()
    }

    return figura_escolhida
}


function obter_nome_da_figura(figura) {
    let nome

    if (figura === 'Q') {
        nome = 'Quadrado'
    }

    if (figura === 'R') {
        nome = 'Retângulo'
    }

    if (figura === 'T') {
        nome = 'Triângulo'
    }

    if (figura === 'Z') {
        nome = 'Trapézio'
    }

    if (figura === 'C') {
        nome = 'Círculo'
    }

    return nome
}


function calcular_areas(figura, comprimento, largura, altura, base, lado, base_maior, base_menor, raio) {
    let pi = 3.14159
    let area = 0

    if (figura === 'Q') {
        area = lado * lado
    }

    if (figura === 'R') {
        area = comprimento * largura
    }

    if (figura === 'T') {
        area = (base * altura) / 2
    }

    if (figura === 'Z') {
        area = (base_maior + base_menor) * altura / 2
    }

    if (figura === 'C') {
        area = pi * raio ** 2
    }

    return area
}


function calcular_proporcao(area_menor, area_maior) {
    let proporcao = (area_menor * 100) / area_maior
    
    return proporcao.toFixed(1)
}


function contem_na_colecao(item, colecao) {
    for (let elemento of colecao) {
        if (item === elemento) {
            return true
        }
    }

    return false
}


main()