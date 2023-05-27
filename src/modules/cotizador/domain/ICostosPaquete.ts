/**
 * @author Raul Galindo
 * @description Entidad paquete
 */

export interface ICostosPaquete {
    nombre: string
    // costo implementacion
    costoActivacion: number
    costoMigracion: number
    costoCapacitacion: number
    // costo base
    costoBaseMensual: number
    // costo timbres
    timbresGratisIncluidos: number
    costoTimbreExtra: number
    // costo usuarios
    costoUsuarioExtra: number
    usuariosGratisIncluidos: number
    usuariosGratisDeCapacitacion: number
    hasPrecioUsuarioExtraVariable: boolean
    costoUsuarioExtraDespuesDeLimite?: number
    cantidadDeUsuariosAntesDelDescuento?: number

    costoCapacitacionUsuarioExtra: number
    //
    hasMigracionChecked?: boolean
    hasCapacitacionChecked?: boolean
}

export interface AtributosDeCostosDinamicosPaquetes {
    timbresRequeridos: number
    usuariosRequeridos: number
    empleadosAgregados: number
    sucursalesAgregados: number
    // pagos
    isPagoImplementacionMensual: boolean
    isPagoMensualidadMensual: boolean
}
