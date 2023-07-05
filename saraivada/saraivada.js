import { criar_vetor_automatico, primos_no_vetor } from "./colecoes.utils.js"
import { mostrar_texto, obter_numero_positivo } from "./funcoes_utils.js"
import { definir_num_de_pedras, calcular_volume_total, definir_valores_minimos, definir_valores_maximos,
         operacao_com_saraivada_1, operacao_com_saraivada_2, mostrar_pedras_primos  } from "./saraivada_features.js"


function main() {
    let num_de_pedras = definir_num_de_pedras()
    let saraivada = criar_vetor_automatico(num_de_pedras, 1, 50)

    mostrar_texto(`Esta é a saraivada que vamos analisar:
    ${saraivada}\n`)
   
    let volume_em_litros = calcular_volume_total(saraivada)

    mostrar_texto(`Volume em litros: ${volume_em_litros}`)

    let valores_minimos = definir_valores_minimos(volume_em_litros, saraivada)
    let quant_de_min = valores_minimos[0]
    let vol_de_min = valores_minimos[1]
    let proporcao_de_min = valores_minimos[2]

    mostrar_texto(`Os valores mínimos foram ${quant_de_min}, o volume total dos mínimos foi de ${vol_de_min}ml e a proporção foi de ${proporcao_de_min}% do total.`)

    let valores_maximos = definir_valores_maximos(volume_em_litros, saraivada)
    let quant_de_max = valores_maximos[0]
    let vol_de_max = valores_maximos[1]
    let proporcao_de_max = valores_maximos[2]

    mostrar_texto(`Os valores máximos foram ${quant_de_max}, o volume total dos máximos foi de ${vol_de_max}ml e a proporção foi de ${proporcao_de_max}% do total.`)
  
    let pedras_primos = primos_no_vetor(saraivada)
    mostrar_pedras_primos(pedras_primos)

    mostrar_texto('\nVamos encontrar a diferença da soma do volume das pedras de index par com a soma do volume das pedras de volume múltiplo de M.\n')
    let alvo_dos_multiplos = obter_numero_positivo('\nPara isso, digite o valor de M: ')
    let resultado_da_operacao_1 = operacao_com_saraivada_1(saraivada, alvo_dos_multiplos)
    mostrar_texto(`\nO resultado dessa operação é: ${resultado_da_operacao_1.toFixed(1)}`)

    mostrar_texto(`\nVamos encontrar a média de volume das Pedras que tem volume distante no máximo 30% do volume médio.\n`)
    let resultado_da_operacao_2 = operacao_com_saraivada_2(saraivada)
    mostrar_texto(`O resultado dessa operação é: ${resultado_da_operacao_2.toFixed(1)}`)

    mostrar_texto('\nFim das Operações!')

}

main()

