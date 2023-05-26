export class SectionUsp extends HTMLElement {
    constructor() {
        super()

        // Render HTML
        this.innerHTML = `               
          <div class="bg-white py-20 lg:py-48">
                <div class="mx-auto max-w-7xl px-14 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <span
                            class="text-base font-semibold leading-7 text-blue-600"
                        >
                            Mas de 10 años ayudando a empresas como la tuya
                        </span>
                        <h2
                            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        >
                            ¿Por qué elegir Evidence ERP?
                        </h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            A diferencia de los demás ERP que existen en el
                            mercado, Evidence ERP ofrece al usuario
                            flexibilidad, accesibilidad e independencia en su
                            puesto de trabajo.
                        </p>
                    </div>
                    <div
                        class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
                    >
                        <dl
                            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
                        >
                            <!-- Un solo sistema -->
                            <div class="relative pl-16">
                                <dt
                                    class="text-base font-semibold leading-7 text-gray-900"
                                >
                                    <div
                                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600"
                                    >
                                        <svg
                                            class="h-5 w-5 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                            />
                                        </svg>
                                    </div>
                                    Un solo sistema para manejar tu operación
                                </dt>
                                <dd
                                    class="mt-2 text-base leading-7 text-gray-600"
                                >
                                    La integración de todos los procesos en un
                                    solo lugar eliminando las duplicidades de
                                    información, documentos, robos y el uso de
                                    diferentes sistemas.
                                </dd>
                            </div>

                            <!-- +23 modulos -->
                            <div class="relative pl-16">
                                <dt
                                    class="text-base font-semibold leading-7 text-gray-900"
                                >
                                    <div
                                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600"
                                    >
                                        <svg
                                            class="h-4 w-4 text-white"
                                            viewBox="0 0 81 80"
                                            fill="none"
                                        >
                                            <path
                                                d="M52.7768 20.9698L46.2538 9.06302C44.3802 5.64311 43.4434 3.93316 42.2029 3.36885C41.1219 2.87708 39.8797 2.87705 38.7987 3.36875C37.5581 3.93299 36.6213 5.64289 34.7475 9.06269L28.2233 20.97C27.7163 21.8952 27.4628 22.3579 27.116 22.7306C26.8085 23.0609 26.4482 23.3383 26.0497 23.5514C25.6001 23.7918 25.0866 23.9196 24.0596 24.1752L10.0389 27.6649C6.57229 28.5277 4.83896 28.9591 3.98994 29.9423C3.24881 30.8006 2.89935 31.927 3.02518 33.0519C3.16933 34.3405 4.35632 35.67 6.73031 38.3289L15.8957 48.5944C16.5778 49.3583 16.9189 49.7403 17.1504 50.1771C17.3557 50.5643 17.4969 50.9818 17.5688 51.4137C17.6499 51.9009 17.6105 52.4105 17.5317 53.4297L16.3958 68.119C16.0944 72.0165 15.9438 73.9652 16.6776 75.1124C17.317 76.1121 18.3616 76.7854 19.5395 76.9569C20.8913 77.1538 22.6154 76.2191 26.0637 74.3497L37.3634 68.2241C38.5092 67.603 39.0821 67.2924 39.6877 67.1706C40.2237 67.0629 40.7759 67.0631 41.3118 67.1712C41.9173 67.2934 42.49 67.6044 43.6354 68.2264L54.9321 74.3609C58.3814 76.234 60.106 77.1706 61.4583 76.9744C62.6367 76.8034 63.682 76.1303 64.3219 75.1305C65.0562 73.9831 64.9055 72.033 64.6042 68.1329L63.4681 53.4294C63.3894 52.4104 63.35 51.9008 63.4311 51.4137C63.503 50.9818 63.6443 50.5643 63.8495 50.1771C64.081 49.7404 64.4221 49.3585 65.1041 48.5945L74.2697 38.3289C76.6437 35.67 77.8307 34.3405 77.9748 33.0519C78.1006 31.927 77.7512 30.8006 77.0101 29.9423C76.161 28.9591 74.4277 28.5277 70.9611 27.6649L56.9406 24.1753C55.9135 23.9196 55.4 23.7918 54.9504 23.5514C54.5518 23.3382 54.1915 23.0608 53.8841 22.7305C53.5372 22.3577 53.2837 21.8951 52.7768 20.9698Z"
                                                stroke="white"
                                                stroke-width="5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    +23 módulos en una sola herramienta
                                </dt>
                                <dd
                                    class="mt-2 text-base leading-7 text-gray-600"
                                >
                                    Cuenta con +23 módulos para la gestión
                                    administrativa y contable.
                                </dd>
                            </div>

                            <!-- Es flexible a tu crecimiento -->
                            <div class="relative pl-16">
                                <dt
                                    class="text-base font-semibold leading-7 text-gray-900"
                                >
                                    <div
                                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600"
                                    >
                                        <svg
                                            class="h-5 w-5 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                            />
                                        </svg>
                                    </div>
                                    Es flexible a tu crecimiento
                                </dt>
                                <dd
                                    class="mt-2 text-base leading-7 text-gray-600"
                                >
                                    Evidence es un sistema adaptable a las
                                    necesidades de su empresa.
                                </dd>
                            </div>

                            <!-- Sistema completamente en la nube -->
                            <div class="relative pl-16">
                                <dt
                                    class="text-base font-semibold leading-7 text-gray-900"
                                >
                                    <div
                                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600"
                                    >
                                        <svg
                                            class="h-5 w-5 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                            />
                                        </svg>
                                    </div>
                                    Sistema completamente en la nube
                                </dt>
                                <dd
                                    class="mt-2 text-base leading-7 text-gray-600"
                                >
                                    No requiere equipo adicional ni ocupa
                                    almacenamiento en los dispositivos.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
          `
    }

    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() {}

    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() {}
}

if ('customElements' in window) {
    customElements.define('section-usp', SectionUsp)
}
