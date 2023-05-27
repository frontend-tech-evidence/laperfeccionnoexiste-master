/**
 * @author Raul Galindo
 * @description Datos de paquetes
 */

import { ICostosDetallesTabla } from './ICostosTabla'

export const costosTablaGrow: ICostosDetallesTabla = {
    nombre: 'Grow',
    precioPorUsuario: 499,
    precioPorUsuarioDespuesDeLimite: 0,
    activacion: 9800,
    horaVirtualAdicional: 948,
    precioCapacitacionUsuarios: 0,
    upgradeVersion: 16421,
    precioRazonSocialAdicional: 2990,
    precioUsuarioAdicionalRazonSocial: 199,    
}

export const costosTablaInstitutional: ICostosDetallesTabla = {
    nombre: 'Institutional',
    precioPorUsuario: 716,
    precioPorUsuarioDespuesDeLimite: 0,
    activacion: 19000, // tiene coma.
    horaVirtualAdicional: 948,
    precioCapacitacionUsuarios: 499,
    upgradeVersion: 27600, // tiene coma
    precioRazonSocialAdicional: 2990,
    precioUsuarioAdicionalRazonSocial: 199,
}

export const costosTablaManufacturing: ICostosDetallesTabla = {
    nombre: 'Manufacturing',
    precioPorUsuario: 829,
    precioPorUsuarioDespuesDeLimite: 499,
    activacion: 19000,
    horaVirtualAdicional: 948,
    precioCapacitacionUsuarios: 924,
    upgradeVersion: 40000,
    precioRazonSocialAdicional: 2990,
    precioUsuarioAdicionalRazonSocial: 299,
}

export const costosTablaEnterprise: ICostosDetallesTabla = {
    nombre: 'Enterprise',
    precioPorUsuario: 998,
    precioPorUsuarioDespuesDeLimite: 499,
    activacion: 449980,
    horaVirtualAdicional: 948,
    precioCapacitacionUsuarios: 924,
    upgradeVersion: 1098501,
    precioRazonSocialAdicional: 12000,
    precioUsuarioAdicionalRazonSocial: 399,
}
