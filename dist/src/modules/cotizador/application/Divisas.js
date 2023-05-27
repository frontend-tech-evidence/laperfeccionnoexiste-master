/**
 * @author Raul Galindo
 * @description Responsabilidad:
 */
export function cambiarDeDivisa(moneda, cantidadAConvertir) {
    return Math.floor(cantidadAConvertir / moneda.precioMoneda);
}
