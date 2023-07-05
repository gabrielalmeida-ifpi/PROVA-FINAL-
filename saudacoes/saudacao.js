import { readFileSync } from 'fs'
import { mostrar_texto, obter_numero, obter_string } from "./funcoes_utils.js"

function main() {
    let linhas
    let nome = obter_string('Seu nome: ')

    while(true) {
        let opcao = obter_numero('Insira um numero positivo para receber uma calorosa saudacao, ou um negativo/0 para encerrar: ')
        
        if (opcao > 0){
        linhas = ler_arquivo_alegria()

        let saudacao_aleatoria = Math.floor(Math.random() * 20)
        let saudacao_definida = linhas[saudacao_aleatoria]

        mostrar_texto(`\nOlá ${nome}, ${saudacao_definida}`)
    }
    
    else {
        linhas = ler_arquivo_alegria()

        let despedida_aleatoria = Math.floor(Math.random() * 20)
        let despedida_definida = linhas[despedida_aleatoria]

        mostrar_texto(`\nTchau ${nome}, ${despedida_definida}`)

        break
    }
}
}


function ler_arquivo_alegria(){
    let data = readFileSync('alegria.txt', 'utf-8')
    let linhas = data.split('\n')

    return linhas
}


main()