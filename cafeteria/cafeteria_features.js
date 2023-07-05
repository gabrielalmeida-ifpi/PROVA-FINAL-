import fs from 'fs'
import { mostrar_texto, obter_numero_positivo, obter_string } from "./funcoes_utils.js"

export function menu_de_opcoes() {
    let menu = `\n******* Menu de Opções *******\n
0 - Encerrar o Programa
1 - Gerar N Comandas Vazias
2 - Cadastrar um Produto
3 - Adicionar Produto a uma Comanda
4 - Mostrar Cardápio
5 - Mostrar Itens de uma Comanda e Valor Total
6 - Pagar Comanda
7 - Mostrar Valor Total Pago\n`

    return mostrar_texto(menu)
}


export function gerar_comanda(n_de_comandas, comandas) {
    let contador = 0

    while (contador < n_de_comandas) {
        const id = (comandas.length + 1)
        const numero = (comandas.length + 1)

        const nova_comanda = {
            'id': id,
            'numero': numero,
        }

        comandas.push(nova_comanda)
        contador++
    }

}


export function gerar_produto(produtos) {
    let num_de_produtos = produtos.length
    const id = num_de_produtos + 1
    const nome = obter_string('Nome do Produto: ')
    const valor = obter_numero_positivo('Valor: ')

    const novo_produto = {
        'id': id,
        'nome': nome,
        'valor': valor
    }

    return novo_produto
}


export function inicializacao(tipo) {
    if (tipo === 'produtos') {
        const produtos = []
        const data = fs.readFileSync('produtos.txt', 'utf-8')
        const lines = data.split('\n')

        for (let line of lines) {
            if (!line) continue

            // 01#Café#3.50

            const atributos = line.split('#')

            // [ '01', 'Café', '3.50'] 

            const produto = {
                'id': atributos[0],
                'nome': atributos[1],
                'valor': atributos[2],
            }
            produtos.push(produto)
        }

        return produtos
    }
    else if (tipo === 'comandas') {
        
        const comandas = []
        const data = fs.readFileSync('comandas.txt', 'utf-8')
        const lines = data.split('\n')

        for (let line of lines) {

            if (!line) continue

            const atributos = line.split('#') 

            const comanda = {
                'id': atributos[0],
                'numero': atributos[1],
            }
            comandas.push(comanda)
        }

        return comandas
    }
    
    else if (tipo === 'itens') {
        const itens = []
        const data = fs.readFileSync('itens.txt', 'utf-8')
        const lines = data.split('\n')

        for (let line of lines) {
            if (!line) continue
            
            const atributos = line.split('#')
            
            const item = {
                'id': atributos[0],
                'produto_id': atributos[1],
                'comanda_id': atributos[2],
                'quantidade_item': atributos[3]
            }
            itens.push(item)
        }

        return itens
    }
}


export function itens_para_comandas(comanda_selecionada, item_selecionado, quantidade_de_itens, itens, comandas, produtos) {
    let num_de_itens = itens.length
    const id = num_de_itens + 1
    let produto_id = 0
    let comanda_id = 0
    let quantidade_item = quantidade_de_itens

    for (const produto of produtos) {
        if (Number(produto['id']) === item_selecionado) {
            produto_id = produto

            break
        }
    }

    for (const comanda of comandas) {
        if (Number(comanda['id']) === comanda_selecionada) {
            comanda_id = comanda

            break
        }
    }

    const novo_item_comanda = {
        'id': id,
        'produto_id': produto_id['id'],
        'comanda_id': comanda_id['id'],
        'quantidade_item': quantidade_item
    }

    itens.push(novo_item_comanda)
}


export function mostrar_cardapio(produtos) {
    let cardapio = `******* Cardápio *******\n`

    for (let produto of produtos) {
        cardapio += `\n${produto['nome']} - R$${produto['valor']}`
    }

    return mostrar_texto(cardapio)
} 


export function selecionar_itens_da_comanda(comanda_selecionada, itens) {
    let itens_selecionados = []

    for (const item of itens) {
        if (Number(item['comanda_id']) === comanda_selecionada) {
            itens_selecionados.push(item)
        }
    }

    return itens_selecionados
}


export function calcular_valor_total(itens_selecionados, produtos) {
    let valor_total = 0

    for (const item of itens_selecionados) {

        for (const produto of produtos) {

            if (Number(produto['id']) === Number(item['produto_id'])) {
                valor_total += Number(produto['valor'])

                break
            }
        }
    }

    return valor_total
}


export function mostrar_itens_da_comanda(itens_a_mostrar, id_comanda) {
    let mostrar_itens = `\n>>> Itens da Comanda ${id_comanda} <<<`

    for (const item of itens_a_mostrar) {

        mostrar_itens += `\n Item ${item['id']}:
Produto ${item['produto_id']}
Quantidade: ${item['quantidade_item']}`
}

    return mostrar_texto(mostrar_itens)
}

export function pagar_comanda(itens, comanda_a_pagar) {
    for (let i = 0; i < itens.length; i++) {

        if (Number(itens[i]['comanda_id']) === comanda_a_pagar) {
            itens.splice(i, 1)

            break
        }
    }
}


export function gravar_dados(dados, tipo) {
    let data = ''

    if (tipo === 'produtos') {

        for (const dado of dados) {
            data += `${dado['id']}#${dado['nome']}#${dado['valor']}\n`
        }

        fs.writeFileSync('produtos.txt', data)
    
    } else if (tipo === 'comandas') {
        
        for (const dado of dados) {
            data += `${dado['id']}#${dado['numero']}\n`
        }

        fs.writeFileSync('comandas.txt', data)

    } else if (tipo === 'itens') {
        
        for (const dado of dados) {
            data += `${dado['id']}#${dado['produto_id']}#${dado['comanda_id']}#${dado['quantidade_item']}\n`
        }

        fs.writeFileSync('itens.txt', data)
    }
}