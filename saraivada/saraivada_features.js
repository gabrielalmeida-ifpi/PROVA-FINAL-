import { obter_numero_positivo } from "./funcoes_utils.js"

export function definir_num_de_pedras() {
    let num_de_pedras = obter_numero_positivo('Numero de pedras (ATE 50!): ')

    if (num_de_pedras > 50) {
        mostrar_texto('INVÁLIDO, QUANTIDADE MÁXIMA EXCEDIDA.')
        definir_num_de_pedras()
    }

    return num_de_pedras
}


export function calcular_volume_total(saraivada) {
    let volume_ml = 0

    for (let pedra of saraivada) {
        volume_ml += pedra
    }

    let volume_l = Math.floor(volume_ml / 1000)

    return volume_l
}


export function definir_valores_minimos(volume_l, saraivada) {
    let quantidade_minimos = 0
    let volume_minimos = 0

    for (let pedra of saraivada) {
        if (pedra === 1) {
            quantidade_minimos++
            volume_minimos += pedra
        }
    }

    let volume_ml = volume_l * 1000
    let proporcao_minimo_total = (volume_minimos * 100) / volume_ml

    if (isNaN(proporcao_minimo_total)) {
        proporcao_minimo_total = 0
    }

    let valores_minimos = [quantidade_minimos, volume_minimos, proporcao_minimo_total]

    return valores_minimos
}


export function definir_valores_maximos(volume_l, saraivada) {
    let quantidade_maximos = 0
    let volume_maximos = 0

    for (let pedra of saraivada) {
        if (pedra === 50) {
            quantidade_maximos++
            volume_maximos += pedra
        }
    }

    let volume_ml = volume_l * 1000
    let proporcao_maximo_total = (volume_maximos * 100) / volume_ml

    if (isNaN(proporcao_maximo_total)) {
        proporcao_maximo_total = 0
    }

    let valores_maximos = [quantidade_maximos, volume_maximos, proporcao_maximo_total]

    return valores_maximos
}


export function mostrar_pedras_primos(pedras_primos) {
    let mostrar_pedras_primos = `>>> Pedras de Valores Primos <<<\n`
    mostrar_pedras_primos += `São as pedras de valor:`

    for (let pedra of pedras_primos) {
        mostrar_pedras_primos += `${pedra}`
    }
}


export function operacao_com_saraivada_1(saraivada, M) {
    let soma_index_pares = 0

    for (let i = 0; i < saraivada.length; i++) {

        if (i % 2 === 0) {
            let pedra_par = saraivada[i]
            soma_index_pares += pedra_par
        }
    }

    let soma_multiplos_de_m = 0

    for (let i = 0; i < saraivada.length; i++) {

        if (saraivada[i] % M === 0) {
            let pedra_multiplo = saraivada[i]
            soma_multiplos_de_m += pedra_multiplo
        }
    }

    const resultado = soma_index_pares - soma_multiplos_de_m

    return resultado
}


export function operacao_com_saraivada_2(saraivada) {     
    let media_de_volume = calcular_media_de_volume(saraivada)
    let soma_de_pedras_corretas = 0
    let num_de_pedras_corretas = 0

    for (const pedra of saraivada) {
        let proporcao = (pedra * 100) / media_de_volume

        if (proporcao <= 30) {
            soma_de_pedras_corretas += pedra
            num_de_pedras_corretas++
        }
    }

    let resultado = soma_de_pedras_corretas / num_de_pedras_corretas
    return resultado
}


export function calcular_media_de_volume(saraivada) {
    let soma_dos_volumes = 0

    for (const pedra of saraivada) {
        soma_dos_volumes += pedra
    }

    let media_de_volume = soma_dos_volumes / saraivada.length
    return media_de_volume
}