/**
 * @author Raul Galindo
 * @description Unicamente interaccion con la UI.
 */

import { IPdfCotizacion } from '../../../src/modules/cotizacion/domain/IPdfCotizacion.js'
import { getAllCostosPaquetes } from '../../../src/modules/cotizador/application/CostosPaquete.js'
import { cambiarDeDivisa } from '../../../src/modules/cotizador/application/Divisas.js'
import {
    costosEnterprise,
    costosGrow,
    costosInstitutional,
    costosManufacturing,
} from '../../../src/modules/cotizador/domain/CostosPaquetes.js'
import {
    costosTablaGrow,
    costosTablaInstitutional,
    costosTablaManufacturing,
    costosTablaEnterprise,
} from '../../../src/modules/cotizador/domain/CostosTabla.js'
import { Dolar } from '../../../src/modules/cotizador/domain/Divisas.js'

import { ICostosDetallesTabla } from '../../../src/modules/cotizador/domain/ICostosTabla.js'

const tooltips = [
    [
        'tooltipIconHorarioAtencionEnterprises',
        'tooltipTextHorarioAtencionEnterprises',
    ],
    [
        'tooltipIconHorarioAtencionInternationalEnterprise',
        'tooltipTextHorarioAtencionInternationalEnterprise',
    ],
    [
        'tooltipIconPrecioRazonSocialAdicional',
        'tooltipTextPrecioRazonSocialAdicional',
    ],
    ['tooltipIconmigracion', 'tooltipTextmigracion'],
    ['tooltipIconcapacitacionesOnline', 'tooltipTextcapacitacionesOnline'],
    [
        'tooltipIconprecioFinalImplementacion',
        'tooltipTextprecioFinalImplementacion',
    ],
    ['tooltipIconprecioFacturacionAnual', 'tooltipTextprecioFacturacionAnual'],
    ['tooltipIconprecioPrimerAno', 'tooltipTextprecioPrimerAno'],

    ['tooltipIconcostoInicialGrow', 'tooltipTextcostoInicialGrow'],
    [
        'tooltipIconcostoInicialInstitutional',
        'tooltipTextcostoInicialInstitutional',
    ],
    [
        'tooltipIconcostoInicialManufacturing',
        'tooltipTextcostoInicialManufacturing',
    ],
    ['tooltipIconcostoInicialEnterprise', 'tooltipTextcostoInicialEnterprise'],
]

const inputsEnDOM = [
    {
        id: 'Usuarios',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    {
        id: 'Empleados',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    {
        id: 'Sucursales',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    {
        id: 'Timbres',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    // Pagos

    {
        id: 'ImplementacionMensual',
        type: 'checkbox',
    },

    {
        id: 'MembresiaMensual',
        type: 'checkbox',
    },
]

const spansCostos = [
    'precioPorUsuario',
    'precioPorUsuarioDespuesDeLimite',
    'activacion',
    'horaVirtualAdicional',
    'precioCapacitacionUsuarios',
    'upgradeVersion',
    'precioRazonSocialAdicional',
    'precioUsuarioAdicionalRazonSocial',
]

function convertirAInteger(cadena) {
    const cadenaSinComas = cadena.replace(/,/g, '')
    const entero = parseInt(cadenaSinComas, 10)
    return entero
}

function cambiarSpanXML(moneda: string) {
    const generacionXMLGrow = document.getElementById('generacionXMLGrow')
    const generacionXMLInstitutional = document.getElementById(
        'generacionXMLInstitutional'
    )
    const generacionXMLManufacturing = document.getElementById(
        'generacionXMLManufacturing'
    )
    const generacionXMLEnterprise = document.getElementById(
        'generacionXMLEnterprise'
    )

    generacionXMLGrow.textContent = '1'
    generacionXMLInstitutional.textContent = '1'
    generacionXMLManufacturing.textContent = '1'
    generacionXMLEnterprise.textContent = '1'

    if (moneda === 'usd') {
        generacionXMLGrow.textContent = '0.625'
        generacionXMLGrow.textContent = '0.625'
        generacionXMLInstitutional.textContent = '0.625'
        generacionXMLManufacturing.textContent = '0.625'
        generacionXMLEnterprise.textContent = '0.625'
    }
}

function cambiarSpanDeDivisaDolares(
    spans,
    paqueteCostos: ICostosDetallesTabla,
    moneda: string
) {
    for (const span in spans) {
        const spanCostoElement = document.getElementById(
            `${spans[span]}${paqueteCostos.nombre}`
        )

        if (spanCostoElement) {
            const costoFinal = Math.floor(paqueteCostos[spans[span]])
                .toLocaleString()
                .replace(/\./g, ',')
            spanCostoElement.textContent = costoFinal

            if (moneda === 'usd') {
                const costoFinal = Math.floor(
                    convertirAInteger(spanCostoElement.textContent) / 16
                )
                    .toLocaleString()
                    .replace(/\./g, ',')

                spanCostoElement.textContent = costoFinal
            }
        }
    }
}

function cambiarElementoADolares(spanId, moneda: string) {
    const spanCostoElement = document.getElementById(`${spanId}`)

    if (spanCostoElement) {
        spanCostoElement.textContent = '9,800'

        if (moneda === 'usd') {
            spanCostoElement.textContent = '612'
        }
    }
}

function toggleTooltip(idTooltipText, show) {
    const tooltipText = document.getElementById(idTooltipText)
    tooltipText.classList.toggle('hidden', !show)
}

function setupTooltipEventListeners(idTooltipIcon, idTooltipText) {
    const tooltipIcon = document.getElementById(idTooltipIcon)

    tooltipIcon.addEventListener('mouseover', () =>
        toggleTooltip(idTooltipText, true)
    )
    tooltipIcon.addEventListener('mouseout', () =>
        toggleTooltip(idTooltipText, false)
    )
}

function hideShowElementHidden(id: string) {
    const element = document.getElementById(id)
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    }
}

// function checkLimitsPaquete(
//     idPaquete: string,
//     limitesPaquete: LimitesPaquetes,
//     costosPaquete: CostosPaquete
// ) {
//     // inputs
//     const inputEmpleados = document.getElementById(
//         'Empleados'
//     ) as HTMLInputElement
//     const inputUsuarios = document.getElementById(
//         'Usuarios'
//     ) as HTMLInputElement
//     const inputSucursales = document.getElementById(
//         'Sucursales'
//     ) as HTMLInputElement

//     // paquetes atributos
//     const contenedor = document.getElementById(
//         `container${idPaquete}`
//     ) as HTMLImageElement
//     const btnCotizar = document.getElementById(
//         `btnCotizar${idPaquete}`
//     ) as HTMLButtonElement
//     const btnContratar = document.getElementById(`btnContratar${idPaquete}`)
//     const error = document.getElementById(`error${idPaquete}`)

//     btnCotizar.classList.remove('cursor-not-allowed')
//     btnContratar.classList.remove('cursor-not-allowed')
//     btnCotizar.setAttribute(
//         'href',
//         'http://127.0.0.1:5500/ui/pages/Cotizacion.html'
//     )
//     contenedor.classList.remove('opacity-50')
//     error.classList.replace('text-red-400', 'text-white')

//     if (parseInt(inputEmpleados.value) > limitesPaquete.maxEmpleados) {
//         btnCotizar.classList.add('cursor-not-allowed')
//         btnContratar.classList.add('cursor-not-allowed')
//         btnCotizar.removeAttribute('href')
//         btnContratar.removeAttribute('href')
//         contenedor.classList.add('opacity-50')
//         error.classList.replace('text-white', 'text-red-400')
//         return
//     }

//     if (parseInt(inputUsuarios.value) > limitesPaquete.maxUsuarios) {
//         btnCotizar.classList.add('cursor-not-allowed')
//         btnContratar.classList.add('cursor-not-allowed')
//         btnCotizar.removeAttribute('href')
//         btnContratar.removeAttribute('href')
//         contenedor.classList.add('opacity-50')
//         error.classList.replace('text-white', 'text-red-400')
//         return
//     }

//     if (parseInt(inputSucursales.value) > limitesPaquete.maxSucursales) {
//         btnCotizar.classList.add('cursor-not-allowed')
//         btnContratar.classList.add('cursor-not-allowed')
//         btnCotizar.removeAttribute('href')
//         btnContratar.removeAttribute('href')
//         contenedor.classList.add('opacity-50')
//         error.classList.replace('text-white', 'text-red-400')
//         return
//     }
// }

function printModalidadPagos() {
    let isPagoMembresiaMensual = document.getElementById(
        'MembresiaMensual'
    ) as HTMLInputElement

    let sufijoPagos = 'año'

    if (isPagoMembresiaMensual.checked) {
        sufijoPagos = 'mes'
    }

    const spans = document.querySelectorAll(`.spanPagos`)

    spans.forEach((elemento) => {
        elemento.textContent = `${sufijoPagos}`
    })
}

function printMoneda() {
    let moneda = localStorage.getItem('moneda')
    if (moneda === null) {
        moneda = 'mxn'
    }

    const spans = document.querySelectorAll(`.moneda`)

    spans.forEach((elemento) => {
        elemento.textContent = moneda
    })

    cambiarSpanDeDivisaDolares(spansCostos, costosTablaGrow, moneda)
    cambiarSpanDeDivisaDolares(spansCostos, costosTablaInstitutional, moneda)
    cambiarSpanDeDivisaDolares(spansCostos, costosTablaManufacturing, moneda)
    cambiarSpanDeDivisaDolares(spansCostos, costosTablaEnterprise, moneda)
    cambiarElementoADolares('migracionGrow', moneda)
    cambiarSpanXML(moneda)
    updateMoneda(moneda)
}

function updateValorInputNumber(id: string, min: number, max: number): void {
    const input = document.getElementById(id) as HTMLInputElement
    if (isNaN(parseFloat(input.value))) {
        input.value = '1'
        localStorage.setItem(id, input.value)
        return
    }

    if (parseInt(input.value) < min) {
        input.value = '1'
        localStorage.setItem(id, input.value)
        return
    }

    if (parseInt(input.value) > max) {
        input.value = '10000'
        localStorage.setItem(id, input.value)
        return
    }

    localStorage.setItem(id, input.value)
}

function updateValorInputSwitch(id: string): void {
    const input = document.getElementById(id) as HTMLInputElement
    const labelDescuento = document.getElementById(
        `${id}LabelDescuento`
    ) as HTMLInputElement

    if (input.checked) {
        localStorage.setItem(id, 'true')
        labelDescuento.classList.add('hidden')
        return
    }

    labelDescuento.classList.remove('hidden')
    localStorage.setItem(id, 'false')
}

function updateMoneda(moneda: string): void {
    const monedaUSD = document.getElementById('monedaUSD')
    const monedaMXN = document.getElementById('monedaMXN')

    if (moneda === 'usd') {
        monedaUSD.classList.add('bg-blue-500', 'text-white')
        monedaUSD.classList.remove('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.add('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.remove('bg-blue-500', 'text-white')
    } else if (moneda === 'mxn') {
        monedaUSD.classList.remove('bg-blue-500', 'text-white')
        monedaUSD.classList.add('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.remove('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.add('bg-blue-500', 'text-white')
    }

    localStorage.setItem('moneda', moneda)
}

function handleIncrementClick(inputId: string, minValue: number) {
    const input = document.getElementById(inputId) as HTMLInputElement
    if (parseInt(input.value) < minValue) {
        input.value = (parseInt(input.value) + 1).toString()
        window.localStorage.setItem(input.id, input.value)
    }
}

function handleDecrementClick(inputId: string, maxValue: number) {
    const input = document.getElementById(inputId) as HTMLInputElement
    if (parseInt(input.value) > maxValue) {
        input.value = (parseInt(input.value) - 1).toString()
        window.localStorage.setItem(input.id, input.value)
    }
}

function reloadValorInputSwitch(id: string): void {
    const storedValue = window.localStorage.getItem(id)
    const inputValue = document.getElementById(id) as HTMLInputElement
    const labelDescuento = document.getElementById(`${id}LabelDescuento`)

    if (storedValue && storedValue === 'true') {
        inputValue.checked = true
        labelDescuento.classList.add('hidden')
    } else {
        window.localStorage.setItem(id, 'false')
    }
}

function handleClick(targetElement, entity, maxValue, minValue) {
    if (targetElement.matches(`#decrement${entity}`)) {
        handleDecrementClick(entity, minValue)
        printLabelUsuariosExtrasCapacitaciones(20)
        printCostosPaquetes()
    }

    if (targetElement.matches(`#increment${entity}`)) {
        handleIncrementClick(entity, maxValue)
        printLabelUsuariosExtrasCapacitaciones(20)
        printCostosPaquetes()
    }
}

// Refactorizar
function printLabelUsuariosExtrasCapacitaciones(
    usuariosGratisDeCapacitacion: number
) {
    let usuariosRequeridos = document.getElementById(
        'Usuarios'
    ) as HTMLInputElement

    const spansUsuariosExtras = document.querySelectorAll(
        `.usuariosExtraCapacitacion`
    )

    spansUsuariosExtras.forEach((elemento) => {
        elemento.textContent = ``
    })

    if (parseInt(usuariosRequeridos.value) > usuariosGratisDeCapacitacion) {
        const usuariosExtras =
            parseInt(usuariosRequeridos.value) - usuariosGratisDeCapacitacion
        spansUsuariosExtras.forEach((elemento) => {
            elemento.textContent = `${usuariosExtras} usuarios adicionales`
        })
    }
}

// Refactorizar
function printCostosPaquetes() {
    let timbresAgregados = document.getElementById(
        'Timbres'
    ) as HTMLInputElement

    let empleadosAgregados = document.getElementById(
        'Empleados'
    ) as HTMLInputElement

    let usuariosAgregados = document.getElementById(
        'Usuarios'
    ) as HTMLInputElement

    let sucursalesAgregados = document.getElementById(
        'Sucursales'
    ) as HTMLInputElement

    // pagos
    let isPagoImplementacionMensual = document.getElementById(
        'ImplementacionMensual'
    ) as HTMLInputElement

    let isPagoMembresiaMensual = document.getElementById(
        'MembresiaMensual'
    ) as HTMLInputElement

    const atributosDeCostosDinamicosPaquetes = {
        timbresRequeridos: parseInt(timbresAgregados.value),
        empleadosAgregados: parseInt(empleadosAgregados.value),
        usuariosRequeridos: parseInt(usuariosAgregados.value),
        sucursalesAgregados: parseInt(sucursalesAgregados.value),
        // pagos
        isPagoImplementacionMensual: Boolean(
            isPagoImplementacionMensual.checked
        ),
        isPagoMensualidadMensual: Boolean(isPagoMembresiaMensual.checked),
    }

    const capacitacionCheckboxGrow = document.getElementById(
        'capacitacionCheckboxGrow'
    ) as HTMLInputElement
    const migracionCheckboxGrow = document.getElementById(
        'migracionCheckboxGrow'
    ) as HTMLInputElement

    costosGrow.hasCapacitacionChecked = capacitacionCheckboxGrow.checked
        ? true
        : false
    costosGrow.hasMigracionChecked = migracionCheckboxGrow.checked
        ? true
        : false

    const costosPaquetes = getAllCostosPaquetes(
        atributosDeCostosDinamicosPaquetes,
        costosGrow,
        costosInstitutional,
        costosManufacturing,
        costosEnterprise
    )

    let moneda = localStorage.getItem('moneda')

    for (const paquete in costosPaquetes) {
        const costosEnPaquete = costosPaquetes[paquete]

        for (const costo in costosEnPaquete) {
            const selector = `${costo}${paquete}`

            let costoFinal = costosEnPaquete[costo]
            if (moneda === 'usd') {
                costoFinal = cambiarDeDivisa(Dolar, costoFinal)
            }

            const spans = document.querySelectorAll(`.${selector}`)

            spans.forEach((elemento) => {
                const costoFormateado = `${costoFinal
                    .toLocaleString()
                    .replace(/\./g, ',')}`
                elemento.textContent = costoFormateado
            })
        }
    }
}

// Refactorizar
function addInputListeners(inputs): void {
    for (const input of inputs) {
        const inputElement = document.getElementById(
            input.id
        ) as HTMLInputElement

        if (input.type === 'number') {
            inputElement.addEventListener('change', () => {
                updateValorInputNumber(input.id, input.minValue, input.maxValue)
                printCostosPaquetes()
                printLabelUsuariosExtrasCapacitaciones(20)
                return
            })

            inputElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                    inputElement.blur()
                    updateValorInputNumber(
                        input.id,
                        input.minValue,
                        input.maxValue
                    )
                    printCostosPaquetes()
                    printLabelUsuariosExtrasCapacitaciones(20)
                    return
                }
            })
        }

        if (input.type === 'checkbox') {
            inputElement.addEventListener('click', () => {
                updateValorInputSwitch(input.id)
                printModalidadPagos()
                printCostosPaquetes()
                // checkLimitsPaquete('Grow', limitesGrow, costosGrow)
                return
            })
        }
    }
}

function setInformationFromPackageSelectedToLocalStorage() {
    const data: IPdfCotizacion = {
        // informacion del paquete
        iconoPaquete: 'grow',
        nombrePaquete: 'Grow',

        // costos
        moneda: 'USD',
        costoInicial: '100',
        precioSegundoAno: '150',
        modalidadPagoMembresia: 'Mensual',
        modalidadPagoImplementacion: 'Mensual',
        costoImplementacion: '500',
        costoMembresia: '50',
        costoUsuarios: '100',
        costoTimbres: '100',

        // cantidades
        cantidadTimbres: localStorage.getItem('Timbres'),
        cantidadSucursales: localStorage.getItem('Sucursales'),
        cantidadUsuarios: localStorage.getItem('Usuarios'),
        cantidadEmpleados: localStorage.getItem('Empleados'),

        costoUsuarioExtra: '10',
    }

    Object.entries(data).forEach(([key, value]) => {
        localStorage.setItem(key, value)
    })
}

const migracionCheckboxGrow = document.getElementById(
    'migracionCheckboxGrow'
) as HTMLInputElement
const capacitacionCheckboxGrow = document.getElementById(
    'capacitacionCheckboxGrow'
) as HTMLInputElement

migracionCheckboxGrow.addEventListener('click', () => {
    printCostosPaquetes()
})

capacitacionCheckboxGrow.addEventListener('click', () => {
    printCostosPaquetes()
})

// Refactorizar

// const productos = document.getElementById('btnProductos')
// const childProductos = document.getElementById('childProductos')

// const industrias = document.getElementById('btnIndustrias')
// const childIndustrias = document.getElementById('childIndustrias')

// const empresa = document.getElementById('btnEmpresa')
// const childEmpresa = document.getElementById('childEmpresa')

// const exploreMas = document.getElementById('btnExploreMas')
// const childExploreMas = document.getElementById('childExploreMas')

// const modulos = document.getElementById('btnModulos')
// const childModulos = document.getElementById('childModulos')

// modulos.addEventListener('mouseenter', () => {
//     childModulos.style.display = 'block'
// })

// modulos.addEventListener('mouseleave', () => {
//     childModulos.style.display = 'none'
// })

// productos.addEventListener('mouseenter', () => {
//     childProductos.style.display = 'block'
// })

// productos.addEventListener('mouseleave', () => {
//     childProductos.style.display = 'none'
// })

// industrias.addEventListener('mouseenter', () => {
//     childIndustrias.style.display = 'block'
// })

// industrias.addEventListener('mouseleave', () => {
//     childIndustrias.style.display = 'none'
// })

// empresa.addEventListener('mouseenter', () => {
//     childEmpresa.style.display = 'block'
// })

// empresa.addEventListener('mouseleave', () => {
//     childEmpresa.style.display = 'none'
// })

// exploreMas.addEventListener('mouseenter', () => {
//     childExploreMas.style.display = 'block'
// })

// exploreMas.addEventListener('mouseleave', () => {
//     childExploreMas.style.display = 'none'
// })

// checkLimitsPaquete('Grow', limitesGrow, costosGrow)
// checkLimitsPaquete('Institutional', limitesInstitutional, costosInstitutional)
// checkLimitsPaquete('Manufacturing', limitesManufacturing, costosManufacturing)
// checkLimitsPaquete('Enterprise', limitesEnterprise, costosEnterprise)
window.document.addEventListener('click', (e) => {
    const targetElement = e.target as Element

    handleClick(targetElement, 'Usuarios', 10000, 1)
    handleClick(targetElement, 'Empleados', 10000, 1)
    handleClick(targetElement, 'Timbres', 10000, 1)
    handleClick(targetElement, 'Sucursales', 10000, 1)

    if (targetElement.matches('#btnVerDemo')) {
        hideShowElementHidden('demoModal')
    }

    if (targetElement.closest('#closeModal')) {
        hideShowElementHidden('demoModal')
    }

    if (targetElement.closest('#monedaMXN')) {
        updateMoneda('mxn')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaGrow, 'mxn')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaInstitutional, 'mxn')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaManufacturing, 'mxn')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaEnterprise, 'mxn')
        cambiarSpanXML('mxn')
        cambiarElementoADolares('migracionGrow', 'mxn')
        printCostosPaquetes()

        // siempre al final
        printMoneda()
    }

    if (targetElement.closest('#monedaUSD')) {
        updateMoneda('usd')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaGrow, 'usd')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaInstitutional, 'usd')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaManufacturing, 'usd')
        cambiarSpanDeDivisaDolares(spansCostos, costosTablaEnterprise, 'usd')
        cambiarSpanXML('usd')
        cambiarElementoADolares('migracionGrow', 'usd')
        printCostosPaquetes()

        // siempre al final
        printMoneda()
    }
})

tooltips.forEach(([tooltipIcon, tooltipText]) =>
    setupTooltipEventListeners(tooltipIcon, tooltipText)
)

// Reload valores de inputs anteriores.
reloadValorInputSwitch('ImplementacionMensual')
reloadValorInputSwitch('MembresiaMensual')
addInputListeners(inputsEnDOM)

// Printear valores de etiquetas.
printCostosPaquetes()
printModalidadPagos()
printLabelUsuariosExtrasCapacitaciones(20)
printMoneda()
