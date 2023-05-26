export class SectionCta extends HTMLElement {
    constructor() {
        super()

        // Render HTML
        this.innerHTML = `               
          <div class="relative isolate overflow-hidden bg-blue-700/90 px-8">
                <!-- Texto -->
                <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div class="mx-auto mt-2 max-w-sm text-center sm:max-w-4xl">
                        <h2
                            class="text-3xl font-bold capitalize tracking-tight text-white sm:text-5xl"
                        >
                            ¿Necesitas ayuda para elegir el plan adecuado?
                        </h2>
                        <p
                            class="mx-auto mt-6 max-w-xl text-2xl text-lg leading-8 text-white"
                        >
                            ¡Nosotros estamos aquí para guiarte y hacerlo fácil
                            y rápido! Contáctanos ahora para recibir
                            asesoramiento experto.
                        </p>
                        <!-- CTAs -->
                        <div
                            class="mt-8 flex flex-row flex-wrap items-center justify-center gap-y-5 sm:gap-x-4 sm:gap-y-0"
                        >
                            <a
                                href="{{url('contacto?lang=').Config::get('app.locale')}}"
                                class="block w-60 rounded-full bg-white py-2 text-center text-sm font-semibold leading-6 text-gray-800 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
                                >Contactar A Ventas
                                <span aria-hidden="true"> &rarr;</span></a
                            >
                        </div>
                    </div>
                </div>

                <!-- Blured -->
                <svg
                    viewBox="0 0 1024 1024"
                    class="absolute bottom-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle
                        cx="512"
                        cy="512"
                        r="512"
                        fill="url(#2)"
                        fill-opacity="0.9"
                    />
                    <defs>
                        <radialGradient id="2">
                            <stop stop-color="#d6894f" />
                        </radialGradient>
                    </defs>
                </svg>
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
    customElements.define('section-cta', SectionCta)
}
