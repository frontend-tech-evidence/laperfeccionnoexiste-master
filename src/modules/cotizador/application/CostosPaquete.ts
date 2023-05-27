/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete en especifico.
 */

import { ICostosPaquete } from '../domain/ICostosPaquete'
import { AtributosDeCostosDinamicosPaquetes } from '../domain/ICostosPaquete'

function calcularCostoImplementacion(
    costoActivacion,
    costoMigracion,
    costoCapacitacion,
    isPagoImplementacionMensual = false,
    hasMigracionChecked = true,
    hasCapacitacionChecked = true
) {
    if (!hasMigracionChecked) {
        costoCapacitacion = 0
    }

    if (!hasCapacitacionChecked) {
        costoMigracion = 0
    }

    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion
    const numeroMeses = 12
    if (isPagoImplementacionMensual) {
        return Math.floor(costoTotal / numeroMeses)
    }
    return Math.floor(costoTotal)
}

function calcularCostoCapacitacion(
    cantidadUsuariosRequeridos: number,
    usuariosGratisDeCapacitacion: number,
    costoCapacitacionBase: number,
    costoCapacitacionUsuarioExtra: number
): number {
    if (cantidadUsuariosRequeridos > usuariosGratisDeCapacitacion) {
        let cantidadUsuariosExtras =
            cantidadUsuariosRequeridos - usuariosGratisDeCapacitacion
        const costoUsuariosExtrasCapacitaciones =
            cantidadUsuariosExtras * costoCapacitacionUsuarioExtra

        return costoCapacitacionBase + costoUsuariosExtrasCapacitaciones
    }

    return costoCapacitacionBase
}

function calcularCostoMembresia(
    costoBaseMensual,
    isPagoMensualidadMensual = false
) {
    const numeroMeses = 12
    if (isPagoMensualidadMensual) {
        return costoBaseMensual
    }

    return costoBaseMensual * numeroMeses
}

function calcularCostoTimbres(
    timbresRequeridos,
    timbresGratisIncluidos,
    costoTimbreExtra
) {
    let costoTotal = 0
    if (timbresRequeridos > timbresGratisIncluidos) {
        costoTotal =
            (timbresRequeridos - timbresGratisIncluidos) * costoTimbreExtra
        return costoTotal
    }
    return costoTotal
}

function calcularCostoFacturacionAnual(
    costoBaseMensual: number,
    costoUsuarios: number
) {
    const mesesDelAño = 12
    return Math.floor(costoBaseMensual * mesesDelAño + costoUsuarios)
}

function calcularCostoImplementacionUnicoPago(
    costoActivacion,
    costoMigracion,
    costoCapacitacion,    
    hasMigracionChecked = true,
    hasCapacitacionChecked = true
) {
    if (!hasMigracionChecked) {
        costoCapacitacion = 0
    }

    if (!hasCapacitacionChecked) {
        costoMigracion = 0
    }

    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion    

    return Math.floor(costoTotal)
}

function calcularCostoUsuario(
    cantidadUsuariosRequeridos,
    cantidadUsuariosGratisIncluidos,
    costoUsuarioExtra,
    hasPrecioUsuarioExtraVariable = false,
    costoUsuarioExtraDespuesDeLimite,
    cantidadDeUsuariosAntesDelDescuento
) {
    if (hasPrecioUsuarioExtraVariable) {
        if (cantidadUsuariosRequeridos > cantidadDeUsuariosAntesDelDescuento) {
            const cantidadAntesDelRango =
                cantidadDeUsuariosAntesDelDescuento -
                cantidadUsuariosGratisIncluidos
            const cantidadDespuesDelRango =
                cantidadUsuariosRequeridos - cantidadDeUsuariosAntesDelDescuento
            const costoDespuesDelLimite =
                cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite
            const costoAntesDelLimite =
                cantidadAntesDelRango * costoUsuarioExtra
            return costoDespuesDelLimite + costoAntesDelLimite
        }
    }
    const costo = Math.abs(
        (cantidadUsuariosGratisIncluidos - cantidadUsuariosRequeridos) *
            costoUsuarioExtra
    )
    return costo
}

function calcularCostoPrimerAno(
    costoBase,
    isImplementacionMensual,
    isPagoMensualidadMensual,
    costoImplementacion,
    costoMembresia,
    costoTimbres,
    costoUsuarios
) {
    if (!isImplementacionMensual) {
        costoMembresia = costoMembresia - costoBase
    }

    let costoTotalFinal = Math.floor(
        costoImplementacion + costoMembresia + costoTimbres + costoUsuarios
    )

    if (!isPagoMensualidadMensual) {
        costoTotalFinal = Math.floor(costoTotalFinal * 0.9)
    }

    return costoTotalFinal
}

function calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios)
}

export function getAllCostosPaquetes(
    atributosDeCostosDinamicosPaquetes: AtributosDeCostosDinamicosPaquetes,
    ...paquetes: ICostosPaquete[]
) {
    let costosPaquetes = {}

    for (const paquete of paquetes) {
        const costoCapacitacion = calcularCostoCapacitacion(
            atributosDeCostosDinamicosPaquetes.usuariosRequeridos,
            paquete.usuariosGratisDeCapacitacion,
            paquete.costoCapacitacion,
            paquete.costoCapacitacionUsuarioExtra
        )

        const costoImplementacion = calcularCostoImplementacion(
            paquete.costoActivacion,
            paquete.costoMigracion,
            costoCapacitacion,
            atributosDeCostosDinamicosPaquetes.isPagoImplementacionMensual,
            paquete.hasMigracionChecked,
            paquete.hasCapacitacionChecked
        )

        const costoMembresia = calcularCostoMembresia(
            paquete.costoBaseMensual,
            atributosDeCostosDinamicosPaquetes.isPagoMensualidadMensual
        )

        const costoTimbres = calcularCostoTimbres(
            atributosDeCostosDinamicosPaquetes.timbresRequeridos,
            paquete.timbresGratisIncluidos,
            paquete.costoTimbreExtra
        )

        const costoUsuarios = calcularCostoUsuario(
            atributosDeCostosDinamicosPaquetes.usuariosRequeridos,
            paquete.usuariosGratisIncluidos,
            paquete.costoUsuarioExtra,
            paquete.hasPrecioUsuarioExtraVariable,
            paquete.costoUsuarioExtraDespuesDeLimite,
            paquete.cantidadDeUsuariosAntesDelDescuento
        )

        const costoFacturacionAnual = calcularCostoFacturacionAnual(
            paquete.costoBaseMensual,
            costoUsuarios
        )

        const costoImplementacionUnicoPago = calcularCostoImplementacionUnicoPago(
            paquete.costoActivacion,
            paquete.costoMigracion,
            costoCapacitacion,            
            paquete.hasMigracionChecked,
            paquete.hasCapacitacionChecked
        )

        const costoPrimerAno = calcularCostoPrimerAno(
            paquete.costoBaseMensual,
            atributosDeCostosDinamicosPaquetes.isPagoImplementacionMensual,
            atributosDeCostosDinamicosPaquetes.isPagoMensualidadMensual,
            costoImplementacion,
            costoMembresia,
            costoTimbres,
            costoUsuarios
        )

        const costoSegundoAno = calcularCostoSegundoAno(
            costoMembresia,
            costoTimbres,
            costoUsuarios
        )

        const costosPaquete = {
            costoCapacitacion,
            costoImplementacion,
            costoMembresia,
            costoFacturacionAnual,
            costoPrimerAno,
            costoSegundoAno,
            costoImplementacionUnicoPago
        }

        costosPaquetes[paquete.nombre] = costosPaquete
    }

    return costosPaquetes
}
