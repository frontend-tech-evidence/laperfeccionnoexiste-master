/**
 * @author Raul Galindo
 * @description Datos de paquetes
 */

import { ICostosPaquete } from './ICostosPaquete'

export const costosGrow: ICostosPaquete = {
    nombre: 'Grow',
    // costo implementacion
    costoActivacion: 9800,
    costoCapacitacion: 9800,
    costoMigracion: 9800,
    // costo base
    costoBaseMensual: 2990,
    // costo timbres
    timbresGratisIncluidos: 100,
    costoTimbreExtra: 1,
    // costo usuarios
    costoUsuarioExtra: 499,
    usuariosGratisIncluidos: 1,
    usuariosGratisDeCapacitacion: 20,

    hasPrecioUsuarioExtraVariable: false,
    costoUsuarioExtraDespuesDeLimite: 499,
    cantidadDeUsuariosAntesDelDescuento: 49,
    costoCapacitacionUsuarioExtra: 0,
    // REFACTORIZAR
    hasMigracionChecked: true,
    hasCapacitacionChecked: true,
}

export const costosInstitutional: ICostosPaquete = {
    nombre: 'Institutional',
    // costo implementacion
    costoActivacion: 19000,
    costoCapacitacion: 19000,
    costoMigracion: 19000,
    // costo base
    costoBaseMensual: 8990,
    // costo timbres
    timbresGratisIncluidos: 100,
    costoTimbreExtra: 1,
    // costo usuarios
    costoUsuarioExtra: 716,
    usuariosGratisIncluidos: 1,
    usuariosGratisDeCapacitacion: 20,

    hasPrecioUsuarioExtraVariable: false,
    costoUsuarioExtraDespuesDeLimite: 499,
    cantidadDeUsuariosAntesDelDescuento: 49,

    costoCapacitacionUsuarioExtra: 499,
}

export const costosManufacturing: ICostosPaquete = {
    nombre: 'Manufacturing',
    // costo implementacion
    costoActivacion: 19000,
    costoCapacitacion: 49000,
    costoMigracion: 29000,
    // costo base
    costoBaseMensual: 14990,
    // costo timbres
    timbresGratisIncluidos: 100,
    costoTimbreExtra: 1,
    // costo usuarios
    costoUsuarioExtra: 829,
    usuariosGratisIncluidos: 1,
    usuariosGratisDeCapacitacion: 20,

    hasPrecioUsuarioExtraVariable: true,
    costoUsuarioExtraDespuesDeLimite: 499,
    cantidadDeUsuariosAntesDelDescuento: 49,

    costoCapacitacionUsuarioExtra: 924,
}

export const costosEnterprise: ICostosPaquete = {
    nombre: 'Enterprise',
    // costo implementacion
    costoActivacion: 449980,
    costoCapacitacion: 449980,
    costoMigracion: 295541,
    // costo base
    costoBaseMensual: 49990,
    // costo timbres
    timbresGratisIncluidos: 100,
    costoTimbreExtra: 1,
    // costo usuarios
    costoUsuarioExtra: 998,
    usuariosGratisIncluidos: 1,
    usuariosGratisDeCapacitacion: 20,

    hasPrecioUsuarioExtraVariable: true,
    costoUsuarioExtraDespuesDeLimite: 499,
    cantidadDeUsuariosAntesDelDescuento: 49,

    costoCapacitacionUsuarioExtra: 924,
}
