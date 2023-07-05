import { mostrar_texto, obter_numero } from "./funcoes_utils.js"

import {
    inicializacao, gerar_comanda, gerar_produto, itens_para_comandas, mostrar_itens_da_comanda,
    mostrar_cardapio, menu_de_opcoes, calcular_valor_total, gravar_dados,
    selecionar_itens_da_comanda, pagar_comanda} from './cafeteria_features.js'


function main() {
    menu_de_opcoes()

    //Variáveis Globais
    const produtos = inicializacao('produtos')
    const comandas = inicializacao('comandas')
    const itens = inicializacao('itens')
    let valor_pago = 0

    //

    let opcao = obter_numero('\nInsira uma Opcao: ')

    while (opcao != 0) {

        if (opcao === 1) {
            let n_de_comandas = obter_numero_positivo('Insira o numero de comandas: ')
            gerar_comanda(n_de_comandas, comandas)
        }

        if (opcao === 2) {
            let novo_produto = gerar_produto(produtos)
            produtos.push(novo_produto)
        }

        if (opcao === 3) {
            let comanda_selecionada = obter_numero('Selecione uma Comanda (ID): ')
            let item_selecionado = obter_numero('Selecione um Item (ID): ')
            let quantidade_de_itens = obter_numero('Quantidade de Itens: ')

            itens_para_comandas(comanda_selecionada, item_selecionado, quantidade_de_itens, itens, comandas, produtos)

            mostrar_texto('Item adicionado com sucesso.')
        }

        if (opcao === 4) {
            mostrar_cardapio(produtos)
        }

        if (opcao === 5) {
            let comanda_selecionada = obter_numero('Selecione uma Comanda (ID): ')
            let itens_a_mostrar = selecionar_itens_da_comanda(comanda_selecionada, itens)
            let valor_total = calcular_valor_total(itens_a_mostrar, produtos)

            mostrar_itens_da_comanda(itens_a_mostrar, comanda_selecionada)
            mostrar_texto(`Valor Total dessa Comanda: R$${valor_total}.`)
        }

        if (opcao === 6) {
            let comanda_a_pagar = obter_numero('Selecione o ID da comanda a ser paga: ')
            let itens_a_pagar = selecionar_itens_da_comanda(comanda_a_pagar, itens)
            pagar_comanda(itens, comanda_a_pagar)

            let valor_total = calcular_valor_total(itens_a_pagar, produtos)

            valor_pago += valor_total

            mostrar_texto('Comanda Paga!')
        }

        if (opcao === 7) {
            mostrar_texto(`\nO valor arrecadado das Comandas Pagas é de R$${valor_pago}.`)
        }

        opcao = obter_numero('\nInsira uma Opcao: ')
    }

    gravar_dados(produtos, 'produtos')
    gravar_dados(comandas, 'comandas')
    gravar_dados(itens, 'itens')
}

main()