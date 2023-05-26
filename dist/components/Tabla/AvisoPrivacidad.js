class AvisoPrivacidad extends HTMLElement {
    constructor() {
        super();
        // Render HTML
        this.innerHTML = `               
        <!-- Aviso de privacidad -->
        <div class="flex flex-col items-start gap-y-4 p-10 px-20 lg:px-32">
                    <span>
                        El 99% de nuestros clientes pagan lo mismo cada mes. Con
                        Evidence, no hay cargos adicionales, no hay costo adicional
                        por soporte ni costos adicionales por infraestructura, en el
                        costo total de propiedad y en costo beneficio somos su mejor
                        opción. ¡Con Evidence tendrá resuelta un área de su negocio
                        de la que ya no deberá de preocuparse! Para más información
                        revise nuestros precios y nuestras condiciones. Además no
                        hay plazos forzosos, con Evidence su satisfacción y la de su
                        equipo está garantizada.
                    </span>
                    <button id="btnVerCondiciones" class="text-blue-500 underline">
                        Da click aqui para ver nuestros terminos y condiciones
                        completas
                    </button>
                </div>

                <!---------------------- Terminos y condiciones ---------------------->
                <div
                    id="terminosModal"
                    class="relative isolate hidden overflow-hidden bg-black/5 text-black/80"
                >
                    <!-- Texto -->
                    <div class="py-24 sm:py-32">
                        <div class="px-8 md:px-20 xl:px-60">
                            <div class="">
                                <h2 class="mb-6 text-4xl font-bold">
                                    Condiciones del cotizador:
                                </h2>
                                <div>
                                    <ul class="space-y-3">
                                        <li>
                                            • Las condiciones de nuestros servicios
                                            pueden cambiar sin previo aviso.
                                        </li>
                                        <li>• Precios incluyen IVA.</li>
                                        <li>
                                            • Los puntos que contienen esta marca: *
                                            * Aplican condiciones o proyecto de
                                            adecuaciones y/o desarrollo, con costo
                                            adicional para más información,
                                            contáctenos o
                                            <a
                                                class="text-blue-500 underline"
                                                href="https://www.evidencetec.com/contrato-clientes"
                                            >
                                                visite este enlace.</a
                                            >
                                        </li>
                                        <li>
                                            • El precio de asistencia a la migración
                                            es opcional solo para el paquete Start y
                                            Grow.
                                        </li>
                                        <li>
                                            • Los servicios de soporte 24 horas no
                                            están incluidos y no está disponible en
                                            todas las versiones o paquetes, es un
                                            servicio que se cotizan por separado y
                                            únicamente los clientes en la versión
                                            Enterprise o superior pueden solicitar
                                            una cotización y tienen la posibilidad
                                            de contratar ese servicio con un costo
                                            adicional.
                                        </li>
                                        <li>
                                            • Todo lo que se muestra en las opciones
                                            de versiones son funcionalidades,
                                            secciones o características de cada
                                            paquete, pueden representar también
                                            contenidos de texto dentro de las
                                            secciones y no ser una funcionalidad,
                                            estas características, nombres y
                                            funciones pueden variar con el tiempo a
                                            criterio de Evidence, el cliente deberá
                                            aceptar los cambios que Evidence
                                            considere necesarios a cada paquete para
                                            su mejor funcionamiento y los objetivos
                                            generales de Evidence.
                                        </li>
                                        <li>
                                            • Contamos con otros módulos
                                            especializados o si necesita algo a la
                                            medida contáctenos, tenemos el servicio
                                            de personalización con desarrollos a la
                                            medida genéricos configurables. (No
                                            incluido en ningún paquete o versión)
                                        </li>
                                        <li>
                                            • Todas nuestras capacitaciones son
                                            digitales, visite nuestras condiciones
                                            generales si requiere capacitaciones
                                            presenciales o contacte con nosotros.
                                        </li>
                                        <li>
                                            • El número de asesorías de
                                            especialistas serán incluidas sin costo
                                            por pagos puntuales, en caso de que el
                                            cliente no realice sus prepagos y pagos
                                            de manera puntual perderá el servicio de
                                            soporte y asesoría por el periodo, en
                                            todos los casos están sujetos a
                                            disponibilidad y son un extra de buena
                                            fe, es su responsabilidad verificar las
                                            recomendaciones y bajo su riesgo.
                                        </li>

                                        <li>
                                            • Esta página se proporciona solo con
                                            fines informativos y no tiene garantía
                                            de estar libre de errores, ni está
                                            sujeta a ninguna otra garantía.
                                        </li>
                                        <li>
                                            • Todos los servicios de Evidence
                                            deberán pagarse por adelantado, de no
                                            pagarlo se cancelará el servicio antes
                                            de iniciar el periodo o ejercicio según
                                            el caso. Si requiere prórroga, por favor
                                            solicítala por escrito antes de
                                            finalizar el periodo.
                                        </li>
                                        <li>
                                            • No se puede cambiar un servicio
                                            inferior (reducir a una versión o
                                            paquete de menor costo) o servicio en
                                            alguna versión o paquetes, ni solicitar
                                            cambio de precio, a una versión más
                                            económica o aprovechar una promoción o
                                            cambio de ofertas de precios para
                                            clientes nuevos.
                                        </li>
                                        <li>
                                            •El cliente acepta que el valor de los
                                            servicios se incrementará
                                            automáticamente al inicio de cada año,
                                            de acuerdo al calendario, en un
                                            porcentaje igual a la inflación
                                            registrada en México en el año anterior
                                            del actual en su momento, de conformidad
                                            con el índice de precios al consumidor
                                            publicado por el Banco de México o un 5%
                                            lo que sea mayor. De igual forma, el
                                            cliente acepta que aquellos conceptos
                                            que Evidence contrate a terceros para la
                                            prestación del servicio, incrementará el
                                            precio del mismo en la misma proporción
                                            en que dichos terceros aumenten sus
                                            precios de manera periódica a Evidence.
                                            Para más información,
                                            <a
                                                class="text-blue-500 underline"
                                                href="https://www.evidencetec.com/contrato-clientes"
                                            >
                                                visite este enlace.</a
                                            >
                                        </li>
                                        <li>Condiciones vigentes desde 2019</li>
                                    </ul>
                                </div>

                                <!-- Boton para cerrar -->
                                <div
                                    class="absolute right-10 top-10 flex items-center"
                                >
                                    <button
                                        id="closeTerminos"
                                        class="text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        <svg
                                            class="h-7 w-7"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <!-- CTA -->
                            <div class="mt-8 flex flex-row items-center">
                                <button
                                    id="closeTerminosBtn"
                                    class="block w-60 rounded-full bg-blue-500 py-2 text-center text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-blue-200 hover:ring-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
                                >
                                    Entiendo, estoy de acuerdo <span> &rarr;</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Blured -->
                    <svg
                        viewBox="0 0 1024 1024"
                        class="absolute bottom-0 left-1/4 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle
                            cx="512"
                            cy="512"
                            r="512"
                            fill="url(#6)"
                            fill-opacity="0.22"
                        />
                        <defs>
                            <radialGradient id="6">
                                <stop stop-color="#000000" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
          `;
        function hideShowElementHidden(id) {
            const element = document.getElementById(id);
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
            }
            else {
                element.classList.add('hidden');
            }
        }
        this.addEventListener('click', () => {
            hideShowElementHidden('terminosModal');
        });
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
    customElements.define('aviso-privacidad', AvisoPrivacidad);
}
