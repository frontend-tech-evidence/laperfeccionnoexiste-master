/**
 * @author Raul Galindo
 * @description Entry point UI page - Cotizador.
 */
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
];
function toggleTooltip(idTooltipText, show) {
    const tooltipText = document.getElementById(idTooltipText);
    tooltipText.classList.toggle('hidden', !show);
}
function setupTooltipEventListeners(idTooltipIcon, idTooltipText) {
    const tooltipIcon = document.getElementById(idTooltipIcon);
    tooltipIcon.addEventListener('mouseover', () => toggleTooltip(idTooltipText, true));
    tooltipIcon.addEventListener('mouseout', () => toggleTooltip(idTooltipText, false));
}
/**
 * @author Raul Galindo
 * @description Unicamente interaccion con la UI.
 */
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
];
function hideShowElementHidden(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
    else {
        element.classList.add('hidden');
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
    let isPagoMembresiaMensual = document.getElementById('MembresiaMensual');
    let sufijoPagos = 'año';
    if (isPagoMembresiaMensual.checked) {
        sufijoPagos = 'mes';
    }
    const spans = document.querySelectorAll(`.spanPagos`);
    spans.forEach((elemento) => {
        elemento.textContent = `${sufijoPagos}`;
    });
}
function printMoneda() {
    let moneda = localStorage.getItem('moneda');
    if (moneda === null) {
        moneda = 'mxn';
    }
    const spans = document.querySelectorAll(`.spanMoneda`);
    spans.forEach((elemento) => {
        elemento.textContent = moneda;
    });
    updateMoneda(moneda);
}
function updateValorInputNumber(id, min, max) {
    const input = document.getElementById(id);
    if (isNaN(parseFloat(input.value))) {
        input.value = '1';
        localStorage.setItem(id, input.value);
        return;
    }
    if (parseInt(input.value) < min) {
        input.value = '1';
        localStorage.setItem(id, input.value);
        return;
    }
    if (parseInt(input.value) > max) {
        input.value = '10000';
        localStorage.setItem(id, input.value);
        return;
    }
    localStorage.setItem(id, input.value);
}
function updateValorInputSwitch(id) {
    const input = document.getElementById(id);
    const labelDescuento = document.getElementById(`${id}LabelDescuento`);
    if (input.checked) {
        localStorage.setItem(id, 'true');
        labelDescuento.classList.add('hidden');
        return;
    }
    labelDescuento.classList.remove('hidden');
    localStorage.setItem(id, 'false');
}
function updateMoneda(moneda) {
    const monedaUSD = document.getElementById('monedaUSD');
    const monedaMXN = document.getElementById('monedaMXN');
    if (moneda === 'usd') {
        monedaUSD.classList.add('bg-blue-500', 'text-white');
        monedaUSD.classList.remove('text-blue-500', 'border', 'border-blue-500');
        monedaMXN.classList.add('text-blue-500', 'border', 'border-blue-500');
        monedaMXN.classList.remove('bg-blue-500', 'text-white');
    }
    else if (moneda === 'mxn') {
        monedaUSD.classList.remove('bg-blue-500', 'text-white');
        monedaUSD.classList.add('text-blue-500', 'border', 'border-blue-500');
        monedaMXN.classList.remove('text-blue-500', 'border', 'border-blue-500');
        monedaMXN.classList.add('bg-blue-500', 'text-white');
    }
    localStorage.setItem('moneda', moneda);
    // Si entro
}
function handleIncrementClick(inputId, minValue) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) < minValue) {
        input.value = (parseInt(input.value) + 1).toString();
        window.localStorage.setItem(input.id, input.value);
    }
}
function handleDecrementClick(inputId, maxValue) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > maxValue) {
        input.value = (parseInt(input.value) - 1).toString();
        window.localStorage.setItem(input.id, input.value);
    }
}
function reloadValorInputSwitch(id) {
    const storedValue = window.localStorage.getItem(id);
    const inputValue = document.getElementById(id);
    const labelDescuento = document.getElementById(`${id}LabelDescuento`);
    if (storedValue && storedValue === 'true') {
        inputValue.checked = true;
        labelDescuento.classList.add('hidden');
    }
    else {
        window.localStorage.setItem(id, 'false');
    }
}
function handleClick(targetElement, entity, maxValue, minValue) {
    if (targetElement.matches(`#decrement${entity}`)) {
        handleDecrementClick(entity, minValue);
    }
    if (targetElement.matches(`#increment${entity}`)) {
        handleIncrementClick(entity, maxValue);
    }
}
function addInputListeners(inputs) {
    for (const input of inputs) {
        const inputElement = document.getElementById(input.id);
        if (input.type === 'number') {
            inputElement.addEventListener('change', () => {
                updateValorInputNumber(input.id, input.minValue, input.maxValue);
                return;
            });
            inputElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                    inputElement.blur();
                    updateValorInputNumber(input.id, input.minValue, input.maxValue);
                    return;
                }
            });
        }
        if (input.type === 'checkbox') {
            inputElement.addEventListener('click', () => {
                updateValorInputSwitch(input.id);
                printModalidadPagos();
                // checkLimitsPaquete('Grow', limitesGrow, costosGrow)
                return;
            });
        }
    }
}
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
window.document.addEventListener('click', (e) => {
    const targetElement = e.target;
    handleClick(targetElement, 'Usuarios', 10000, 1);
    handleClick(targetElement, 'Empleados', 10000, 1);
    handleClick(targetElement, 'Timbres', 10000, 1);
    handleClick(targetElement, 'Sucursales', 10000, 1);
    if (targetElement.matches('#btnVerDemo')) {
        hideShowElementHidden('demoModal');
    }
    if (targetElement.closest('#closeModal')) {
        hideShowElementHidden('demoModal');
    }
    if (targetElement.matches('#monedaMXN')) {
        updateMoneda('mxn');
        // siempre al final
        printMoneda();
    }
    if (targetElement.matches('#monedaUSD')) {
        updateMoneda('usd');
        // siempre al final
        printMoneda();
    }
});
// Reload valores de inputs anteriores.
reloadValorInputSwitch('ImplementacionMensual');
reloadValorInputSwitch('MembresiaMensual');
addInputListeners(inputsEnDOM);
// Printear valores de etiquetas.
printMoneda();
printModalidadPagos();
// checkLimitsPaquete('Grow', limitesGrow, costosGrow)
// checkLimitsPaquete('Institutional', limitesInstitutional, costosInstitutional)
// checkLimitsPaquete('Manufacturing', limitesManufacturing, costosManufacturing)
// checkLimitsPaquete('Enterprise', limitesEnterprise, costosEnterprise)
tooltips.forEach(([tooltipIcon, tooltipText]) => setupTooltipEventListeners(tooltipIcon, tooltipText));
