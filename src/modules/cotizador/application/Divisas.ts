/**
 * @author Raul Galindo
 * @description Responsabilidad:
 */

import { Divisas } from '../domain/IDivisas'

export function cambiarDeDivisa(
    moneda: Divisas,
    cantidadAConvertir: number
): number {
    return Math.floor(cantidadAConvertir / moneda.precioMoneda)
}
