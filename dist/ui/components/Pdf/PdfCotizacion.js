class PdfCotizacion extends HTMLElement {
    constructor() {
        super();
        const date = getDate();
        const packageInformation = getInformationFromLocalStorage();
        setInformationToLocalStorage();
        const modalidadPagoMembresiaCorta = packageInformation.modalidadPagoMembresia === 'mensual'
            ? 'mes'
            : 'año';
        const modalidadPagoImplementacionCorta = packageInformation.modalidadPagoImplementacion === 'mensual'
            ? 'mes'
            : 'año';
        // Render HTML
        this.innerHTML = `   
        
         <!-- PDF -->
         <div class="rounded-sm border border-gray-800/10 px-10 pb-14 pt-8 md:max-w-[45rem]">
                    <!-------------------- Header del cotizador -------------------->
                    <div class="flex flex-row items-center justify-between py-2 md:px-4">
                        <!-- Logo evidence-->
                        <img class="w-20 md:w-28" src="/src/assets/evidence-logos/evidence-logo.svg" />

                        <!-- Cabecera del pdf -->
                        <div
                            class="flex max-w-xs flex-col items-end justify-center gap-y-1 pl-20 text-right text-[0.55rem] text-gray-700 md:text-[0.6rem]">
                            <span>EVIDENCE TECHNOLOGY S.A. DE C.V.</span>
                            <span>Calle Río Alamo 1302 Esquina con Río Jordan
                                Col. Magdalenas C.P. 27010 Torreón,
                                Coahuila</span>
                            <a href="tel:+528712960072"><span>871-2960-072</span></a>
                            <span>cotizaciones@evidencetec.com</span>
                        </div>
                    </div>

                    <!-------------------- Informacion del usuario -------------------->
                    <div class="flex flex-col gap-y-1 pt-4 text-xs text-gray-600 md:px-4">
                        <span class="font-bold">Para:
                            <span class="font-normal" id="spanNombre"></span></span>
                        <span class="font-bold">Fecha:
                            <span class="font-normal"> ${date}</span></span>
                        <span class="font-bold">Email:
                            <span class="font-normal" id="spanEmail"></span></span>
                        <span class="font-bold">Teléfono:
                            <span class="font-normal" id="spanTelefono"></span></span>
                        <span class="font-bold">Nombre de la empresa:
                            <span class="font-normal" id="spanNombreEmpresa"></span></span>
                        <!-- <span class="font-bold">Nombre del distribuidor:
                            <span class="font-normal" id="spanNombreDistribuidor"></span></span> -->
                    </div>

                    <!-------------------- Logo y nombre paquete -------------------->
                    <div class="flex flex-col items-center gap-y-10 pt-10">
                        <!-- Logo y nombre del paquete -->
                        <div class="flex flex-col items-center justify-center gap-y-2">
                            <img class="w-16" src="/src/assets/evidence-logos/grow-icon.svg" />
                            <div class="flex flex-col gap-y-2 font-semibold">
                                <span>Paquete: ${packageInformation.nombrePaquete}</span>
                            </div>
                        </div>
                    </div>

                    <!-------------------- Tablas paquetes -------------------->
                    <div class="mb-4 mt-8 flex flex-col justify-center gap-y-1 text-xs text-gray-600 md:px-4">
                        <div class="flex flex-col gap-y-6">

                        <table class="border-collapse">
                                <tbody class="text-center">
                                    <tr>
                                        <th class="w-1/5 border-x border-t p-2.5">
                                            Usuarios contratados
                                        </th>
                                        <th class="w-1/5 border-x border-t p-2.5">
                                            Sucursales contratadas
                                        </th>
                                        <th class="w-1/5 border-x border-t p-2.5">
                                            Timbres contratados
                                        </th>
                                        <th class="w-1/5 border-x border-t p-2.5">
                                            Empleados
                                        </th>
                                       
                                        <th class="w-1/4 border-x border-t p-2.5">
                                            Modalidad de pago de implementación
                                        </th>
                                        <th class="w-1/4 border-x border-t p-2.5">
                                            Modalidad de pago de membresia
                                        </th>    
                                    </tr>

                                    <tr>
                                        <td class="w-1/5 border-x border-y p-2.5">
                                            ${packageInformation.cantidadUsuarios}
                                        </td>
                                        <td class="w-1/5 border-x border-y p-2.5">
                                            ${packageInformation.cantidadSucursales}
                                        </td>
                                        <td class="w-1/5 border-x border-y p-2.5">
                                            ${packageInformation.cantidadTimbres}
                                        </td>
                                        <td class="w-1/5 border-x border-y p-2.5">
                                            ${packageInformation.cantidadEmpleados}
                                        </td>
                                        <td class="w-1/2 border-x border-y p-2.5">
                                            ${packageInformation.modalidadPagoImplementacion}
                                        </td>
                                        <td class="w-1/2 border-x border-y p-2.5">
                                            ${packageInformation.modalidadPagoMembresia}
                                        </td>  
                                    </tr>
                                </tbody>
                            </table>

                            <table class="border-collapse">
                                <tbody class="text-center">
                                    <tr>                                       
                                        <th class="w-1/4 border-x border-t p-2.5">
                                            Precio de implementación
                                        </th>

                                        <th class="w-1/4 border-x border-t p-2.5">
                                            Precio de membresia
                                        </th>

                                        <th class="w-1/4 border-x border-t p-2.5">
                                            Precio por usuarios contratados
                                        </th>

                                        <th class="w-1/4 border-x border-t p-2.5">
                                            Precio de timbres contratados
                                        </th>                                         
                                    </tr>

                                    <tr>
                                        <td class="w-1/4 border-x border-y p-2.5">
                                            $${packageInformation.costoImplementacion} ${packageInformation.moneda} / ${modalidadPagoMembresiaCorta}
                                        </td>
                                        <td class="w-1/4 border-x border-y p-2.5">
                                            $${packageInformation.costoMembresia} ${packageInformation.moneda} / ${modalidadPagoImplementacionCorta}
                                        </td>
                                        <td class="w-1/4 border-x border-y p-2.5">
                                            $${packageInformation.costoUsuarios} ${packageInformation.moneda} / ${modalidadPagoImplementacionCorta}
                                        </td>
                                        <td class="w-1/4 border-x border-y p-2.5">
                                            $${packageInformation.costoTimbres} ${packageInformation.moneda} / ${modalidadPagoImplementacionCorta}
                                        </td>                                     
                                    </tr>
                                </tbody>
                            </table>

                            <table class="border-collapse">
                                <tbody class="text-left">
                                    <tr>                                       
                                        <th class="w-full border border-gray-900/10 p-2.5 px-8 flex items-center">
                                            <span class="w-5/12 ">Costo para iniciar (Precio implementacion + Precio membresia + Precio de usuarios + Precio de timbres)</span>
                                            <span class="w-2/12 text-center text-lg"> = </span>
                                            <span class="w-5/12">$${packageInformation.costoInicial} ${packageInformation.moneda}</span>
                                        </th>                   
                                    </tr>                                    
                                </tbody>
                            </table>                            
                        </div>
                    </div>

                    <!-- Notas -->
                    <div class="flex flex-col justify-center gap-y-2 pt-4 md:px-4">
                        <span class="text-base font-bold text-gray-700">Notas:</span>

                        <div class="flex flex-col gap-y-2 text-xs text-gray-600">
                            <!-- Vigencia -->
                            <div class="flex flex-col gap-y-1">
                                <span class="font-bold">Vigencia: </span>

                                <!-- Facturación anual del precio promocional -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Este presupuesto tiene una vigencia
                                        de 30 dias.
                                    </span>
                                </div>
                            </div>

                            <!-- Precio usuario extra: -->
                            <div class="flex flex-col gap-y-1">
                                <span class="font-bold">En caso de necesitar usuarios extras:
                                </span>

                                <!-- Facturación anual del precio promocional -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        El costo de cada usuario extra sera
                                        de: $${packageInformation.costoUsuarioExtra} ${packageInformation.moneda}                                        
                                </div>
                            </div>

                            <!-- En el precio inicial se incluye: -->
                            <div class="flex flex-col gap-y-1">
                                <span class="font-bold">En el costo inicial se incluye:
                                </span>

                                <!-- Activacion y configuracion -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Activación y configuración del
                                        sistema.</span>
                                </div>

                                <!-- Capacitaciones en línea para su uso eficiente -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Capacitaciones en línea para su uso
                                        eficiente.</span>
                                </div>

                                <!-- Asistencia para migración de la información existente, garantizando una transición sin problemas. -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Asistencia para migración de la
                                        información existente,<br />
                                        garantizando una transición sin
                                        problemas.</span>
                                </div>

                                <!-- Facturación anual del precio promocional -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Facturación anual del precio
                                        promocional.</span>
                                </div>
                            </div>

                            <!-- En la facturación anual del precio promocional se incluye: -->
                            <div class="flex flex-col gap-y-1">
                                <span class="font-bold">En la facturación anual del precio
                                    promocional se incluye:
                                </span>

                                <!-- Precio total de usuarios adicionales. -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Precio total de usuarios
                                        adicionales.</span>
                                </div>

                                <!-- Facturación anual del precio promocional -->
                                <div class="ml-2 flex items-center gap-x-1">
                                    <!-- Circulo -->
                                    <svg viewBox="0 0 4 4" class="h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    </svg>
                                    <span class="font-normal" id="spanNombre">
                                        Facturación anual del precio
                                        promocional.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Datos de pago -->
                    <div class="flex flex-col justify-center gap-y-2 pt-8 md:px-4">
                        <span class="text-base font-bold text-gray-700">Datos para transferencia:
                        </span>

                        <div class="flex flex-col gap-y-1 text-xs text-gray-600">
                            <!-- Banco -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">Banco:</span>
                                <span class="font-normal"> Banorte </span>
                            </div>

                            <!-- Número de cuenta -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">Número de cuenta:</span>
                                <span class="font-normal">
                                    1060-6528-15
                                </span>
                            </div>

                            <!-- Sucursal -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">Sucursal:</span>
                                <span class="font-normal"> 2704 </span>
                            </div>

                            <!-- CLABE -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">CLABE:</span>
                                <span class="font-normal">
                                    0720-6001-0606-5281-51
                                </span>
                            </div>

                            <!-- RFC -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">RFC:</span>
                                <span class="font-normal">
                                    ETE1-8021-6ENA
                                </span>
                            </div>

                            <!-- Direccion: -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">Direccion:</span>
                                <span class="font-normal">
                                    Calle Río Alamo 1302 Esquina con Río
                                    Jordan Col. Magdalenas C.P. 27010
                                    Torreón, Coahuila
                                </span>
                            </div>

                            <!-- Correo: -->
                            <div class="flex gap-x-1">
                                <span class="font-bold">Correo:</span>
                                <span class="font-normal">
                                    facturacion.evidence@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>

                    <ul class="pt-8 text-[.625rem] text-gray-400 md:px-4 space-y-2">
                        <li>
                            * Vigencia hasta el cambio de políticas de
                            precios *
                        </li>
                        <li>
                            * El precio inicial es el total que el usuario
                            pagara el primer año de contratación de nuestro
                            ERP Evidence, debido a que incluye la
                            activación, capacitación y migración de la
                            información además del total de usuarios
                            adicionales y el total de las razones sociales
                            adicionales (las razones sociales adicionales
                            solo estan disponibles para los paquetes Grow,
                            Institutional, Manufacturing y Enterprise).
                            Después del primer año de contratación, el
                            usuario pagara el total del precio promocional
                            de manera mensual, en la cual se incluye el
                            total de usuarios adicionales y el total de
                            razones sociales adicionales (las razones
                            sociales adicionales solo estan disponibles para
                            los paquetes Grow, Institutional, Manufacturing
                            y Enterprise).
                        </li>
                    </ul>
                </div>
                
          `;
        function getDate() {
            let f = new Date();
            let dia = f.getDate().toString();
            let mes = (f.getMonth() + 1).toString();
            let ano = f.getFullYear().toString();
            const fecha = mes.length === 1
                ? `${dia}/0${mes}/${ano}`
                : `${dia}/${mes}/${ano}`;
            return fecha;
        }
        function setInformationToLocalStorage() {
            const fictitiousData = {
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
                cantidadTimbres: '1000',
                cantidadSucursales: '5',
                cantidadUsuarios: '10',
                cantidadEmpleados: '50',
                costoUsuarioExtra: '10',
                // modalidades pagos
                memebresia: 'Básica',
                implementacion: 'Completa',
            };
            Object.entries(fictitiousData).forEach(([key, value]) => {
                localStorage.setItem(key, value);
            });
        }
        function getInformationFromLocalStorage() {
            const keys = [
                'iconoPaquete',
                'nombrePaquete',
                'moneda',
                'costoInicial',
                'precioSegundoAno',
                'modalidadPagoMembresia',
                'modalidadPagoImplementacion',
                'costoImplementacion',
                'costoMembresia',
                'costoUsuarioExtra',
                'costoTimbres',
                'costoUsuarios',
                'cantidadTimbres',
                'cantidadSucursales',
                'cantidadUsuarios',
                'cantidadEmpleados',
                'memebresia',
                'implementacion',
            ];
            const packageInformation = keys.reduce((obj, key) => {
                obj[key] = localStorage.getItem(key);
                return obj;
            }, {});
            return packageInformation;
        }
    }
    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() { }
    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() { }
}
if ('customElements' in window) {
    customElements.define('pdf-template-cotizacion', PdfCotizacion);
}
export {};
