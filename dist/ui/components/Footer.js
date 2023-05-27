class Footer extends HTMLElement {
    constructor() {
        super();
        // Render HTML
        this.innerHTML = `               
            <footer class="bg-white">
            <div class="mx-auto px-14 pb-8 pt-16 sm:pt-24 lg:px-40 lg:pt-32">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <!-- Logo y descripcion -->
                    <div class="space-y-8">
                        <svg
                            class="h-7 w-auto"
                            viewBox="0 0 1231 199"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M138.821 39.667L99.153 79.322L118.986 99.154L138.817 79.326L178.474 118.994L198.308 99.162L138.821 39.667Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M138.813 118.994L99.148 158.648L79.318 138.816L99.153 118.988L79.32 99.154L59.488 118.984L39.66 99.148L59.493 79.32L79.32 59.488H79.322L118.996 19.834L99.166 0L0 99.144L99.141 198.308L158.639 138.822L138.813 118.994Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M530.75 149.213L530.725 49.0925L512.063 49.0973L512.088 149.217L530.75 149.213Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M414.473 124.375L383.69 49.091H362.074L403.59 149.215H425.268L466.733 49.091H445.098L414.473 124.375Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M250.957 126.92L250.952 109.674H307.982L307.977 87.761H250.952L250.94 71.397H316.757L316.751 49.091H232.276L232.311 149.215H316.791L316.777 126.92H250.957Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M1230.09 126.92H1164.27L1164.26 109.674H1221.29L1221.28 87.761H1164.25L1164.24 71.397H1230.07L1230.06 49.091H1145.57L1145.61 149.215H1230.09V126.92Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M742.336 126.92V109.674H799.352V87.761H742.332L742.324 71.397H808.135L808.127 49.091H723.652L723.69 149.215H808.166V126.92H742.336Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M671.871 63.63C669.775 59.114 666.859 55.554 663.137 52.974C659.537 50.386 655.715 49.091 651.647 49.091H579.053L579.088 149.216H651.682C655.821 149.216 659.623 147.923 663.117 145.355C666.753 142.759 669.667 139.218 671.86 134.679C674.182 130.138 675.296 125.249 675.197 119.982L675.186 78.332C675.27 73.058 674.182 68.182 671.871 63.63ZM653.965 123.506C652.317 125.643 650.219 126.793 647.746 126.92H597.744L597.732 71.398H647.712C650.208 71.25 652.294 72.369 653.949 74.755C655.652 76.927 656.518 79.727 656.518 83.089V115.242C656.52 118.41 655.674 121.162 653.965 123.506Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M1078.55 113.689V115.242C1078.55 118.412 1077.69 121.162 1076.01 123.504C1074.35 125.645 1072.27 126.789 1069.76 126.916H1028.77C1026.36 126.871 1024.3 125.768 1022.59 123.576C1020.85 121.224 1019.97 118.461 1019.97 115.246L1019.96 83.093C1019.96 79.729 1020.82 76.963 1022.52 74.832C1024.27 72.494 1026.36 71.347 1028.75 71.399H1069.73C1072.24 71.252 1074.33 72.37 1075.99 74.756C1077.68 76.929 1078.54 79.727 1078.54 83.091V84.764H1097.21V78.329C1097.25 70.247 1095.11 63.365 1090.82 57.652C1086.56 51.953 1081.34 49.09 1075.23 49.09H1023.27C1017.18 49.09 1012.03 51.951 1007.74 57.652C1003.43 63.362 1001.3 70.245 1001.3 78.329L1001.32 119.975C1001.32 128.055 1003.44 134.965 1007.71 140.659C1012.01 146.366 1017.19 149.214 1023.29 149.214H1075.27C1081.39 149.214 1086.58 146.366 1090.84 140.659C1095.14 134.962 1097.26 128.055 1097.23 119.975V113.694H1078.55V113.689Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M934.229 49.091L934.254 119.408L875.108 49.091H856.451L856.49 149.215H875.149L875.129 79L934.27 149.215H952.992L952.959 49.091H934.229Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <p class="text-sm leading-6 text-gray-600">
                            Apostamos por un mundo en el que las empresas pueden
                            acceder a sistemas modernos y fáciles de usar. Que
                            les permitan ser más eficientes y rentables sin
                            depender de opciones anticuadas y limitadas.
                            <br /><br />
                            Nos atrevemos a desafiar el status quo y creemos que
                            los sistemas deben servir tanto a las personas como
                            a la empresa, proporcionando herramientas que
                            faciliten el trabajo y aumenten la productividad.
                        </p>
                        <div class="flex space-x-6 text-gray-400">
                            <a
                                href="https://www.facebook.com/Evidencetechnology/"
                                class="text-gray-400 hover:text-blue-500"
                            >
                                <span class="sr-only">Facebook</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/evidencetechnology/"
                                class="text-gray-400 hover:text-blue-500"
                            >
                                <span class="sr-only">Instagram</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://twitter.com/EvidenceTechno1"
                                class="text-gray-400 hover:text-blue-500"
                            >
                                <span class="sr-only">Twitter</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCaFqXsG69b6L9v55D5gSR8A"
                                class="text-gray-400 hover:text-blue-500"
                            >
                                <span class="sr-only">YouTube</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/evidencetechnology"
                                class="flex items-center text-gray-400 hover:text-blue-500"
                            >
                                <span class="sr-only">LinkedIn</span>
                                <svg
                                    class="h-5 w-6"
                                    viewBox="0 0 509 510"
                                    fill="currentColor"
                                >
                                    <path
                                        d=" M51.0988 2.65501C27.14 8.9181 8.05254 28.0056 1.98828 51.9644C0 59.5199 0 63.7947 0 255.167C0 446.539 0 450.814 1.98828 458.369C8.05254 482.328 27.3389 501.614 51.2977 507.678C58.8531 509.667 63.1279 509.667 254.5 509.667C445.872 509.667 450.147 509.667 457.702 507.678C481.661 501.614 500.947 482.328 507.012 458.369C509 450.814 509 446.539 509 255.167C509 63.7947 509 59.5199 507.012 51.9644C500.848 27.9062 481.661 8.71927 457.504 2.5556C450.246 0.766147 444.58 0.666733 254.102 0.766147C66.0109 0.766147 57.859 0.865561 51.0988 2.65501ZM153.396 98.0925C173.279 104.256 186.7 126.127 183.021 146.308C178.051 173.647 150.612 189.553 124.665 180.308C115.619 177.027 105.777 168.279 101.303 159.63C90.268 137.958 98.917 111.414 120.49 100.478C129.934 95.7066 142.56 94.8119 153.396 98.0925ZM348.645 198.6C385.428 203.67 405.709 227.828 411.177 273.061C412.171 281.611 412.469 300.201 412.568 346.429V408.463L409.685 411.346L406.802 414.229H378.37H349.938L346.756 411.346L343.476 408.463L342.979 347.423C342.481 288.669 342.382 286.283 340.394 280.318C334.628 263.418 325.084 256.161 308.681 256.161C292.079 256.161 280.745 265.208 274.582 283.4L271.897 291.453L271.4 349.908L270.903 408.463L267.623 411.346L264.441 414.229H237.003H209.565L206.682 411.346L203.799 408.463V307.956V207.448L206.682 204.267L209.565 200.986L236.307 200.688C261.558 200.489 263.149 200.588 266.231 202.477C270.506 205.062 271.4 207.846 271.4 218.085V226.535L275.377 221.465C290.19 202.776 317.33 194.226 348.645 198.6ZM167.513 202.08C174.273 205.261 173.975 199.594 173.975 307.856C173.975 392.458 173.776 405.779 172.483 408.264C169.402 414.13 169.004 414.229 140.472 414.229C122.379 414.229 113.63 413.832 111.841 413.036C106.174 410.452 106.373 414.925 106.373 307.359C106.373 239.26 106.671 207.647 107.467 206.354C107.964 205.261 109.952 203.471 111.642 202.477C114.525 200.688 116.812 200.489 139.478 200.489C159.957 200.489 164.829 200.787 167.513 202.08Z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Elementos del footer -->
                    <div
                        class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
                    >
                        <!-- Izquierda -->
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3
                                    class="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Modulos
                                </h3>
                                <ul role="list" class="mt-6">
                                    <div class="mt-1.5 space-y-3 text-sm">
                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/gestion-de-ventas?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Gestión de ventas</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/contabilidad?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Contabilidad</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/crm?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >CRM</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/compras?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Compras</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/pagos?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Pagos</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/fiscal?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Fiscal</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/recursos-humanos?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Recursos Humanos</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/almacenes?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Almacenes</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/nomina?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Nómina</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/credito-y-cobranza?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Crédito y cobranza</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/direccion?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Dirección</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/sistema?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Sistema</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/administrativos/bancos?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Bancos</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/especializados/proyectos?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Proyectos</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/especializados/produccion?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Producción</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/especializados/mantenimiento?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Mantenimiento</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/especializados/logistica?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Logistica</a
                                            >
                                        </li>

                                        <li>
                                            <a
                                                href="https://www.evidencetec.com/modulos/especializados/activos-fijos?lang=es"
                                                class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                                >Activos fijos</a
                                            >
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <!-- Industrias -->
                            <div class="mt-10 md:mt-0">
                                <h3
                                    class="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Industrias
                                </h3>
                                <ul role="list" class="mt-6 space-y-2">
                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-para-agroindustrias?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Agroindustria</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-empresas-comercio?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Comercio al por mayor</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-para-la-gestion-de-hospitales?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Servicios de salud</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-erp-para-gobierno?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Gobierno</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-erp-para-instituciones-educativas?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Educación</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-empresas-logistica?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Servicios de transporte</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/software-para-constructoras?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Construcción</a
                                        >
                                    </li>

                                    <!-- Quitar las otras o no? -->

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Servicios</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Rastreo Satelital</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Minería</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Comercio</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Logística</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Transporte</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Manufactura</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Fabricación de racks</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Fábricas de fundición</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Fumigación</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Paneles solares</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Materias primas</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Rastreo GPS</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Proyectos</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Eléctricos</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Fabricaciones</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Tableros</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Redes</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Tecnología</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Internet</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >SaaS</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/industrias/?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Grúas</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Derecha -->
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <!-- Explore mas -->
                            <div>
                                <h3
                                    class="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Explore más
                                </h3>
                                <ul role="list" class="mt-6 space-y-2">
                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/precios-erp?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Precios ERP</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/automatice-sus-procesos?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Automatice sus procesos</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/autodescubrimiento?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Autoevaluación para empresas</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/recursos/conocimiento?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Conocimiento</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/recursos/tutoriales?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Tutoriales</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/recursos/preguntas-frecuentes?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Preguntas frecuentes</a
                                        >
                                    </li>
                                </ul>
                            </div>

                            <!-- Producto -->
                            <div class="mt-10 md:mt-0">
                                <h3
                                    class="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Producto
                                </h3>
                                <ul role="list" class="mt-6 space-y-2">
                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/plataforma-erp-para-pymes-y-startups?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Plataforma ERP para PYMES y
                                            startups</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/erp-para-grandes-empresas?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >ERP para grandes empresas</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/evidence-CRM?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Evidence CRM</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/evidence-SCM?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Evidence SCM</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/evidence-TMS?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Evidence TMS</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/evidence-business-intelligence?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Evidence Business intelligence</a
                                        >
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.evidencetec.com/producto/knowledge-management?lang=es"
                                            class="text-sm leading-6 text-gray-600 hover:text-blue-500"
                                            >Knowledge Management</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24"
                >
                    <p class="text-xs leading-5 text-gray-500">
                        &copy; 2020 Evidence Technology, Todos los derechos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
          `;
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
    customElements.define('footer-simple', Footer);
}
