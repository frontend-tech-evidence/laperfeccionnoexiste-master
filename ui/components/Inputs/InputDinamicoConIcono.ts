class InputDinamicoConIcono extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')
        const idCapitalize = capitalizeWords(id)

        const inputTipo = this.getAttribute('inputTipo')
        const labelTexto = this.getAttribute('labeltexto')
        const errorTexto = this.getAttribute('errorTexto')
        const placeholder = this.getAttribute('placeholder')
        const iconSrc = this.getAttribute('iconSrc')
        let isOptional = this.getAttribute('isOptional')
        isOptional = addHidden(isOptional)        

        // Render HTML
        this.innerHTML = `               
            <div>
                <!-- Top labels -->
                <div class="flex justify-between">
                    <label for="${id}" class="text-sm font-semibold leading-6 text-gray-900">${labelTexto}</label>
                    <span class="text-sm leading-6 text-gray-500 ${isOptional}" id="opcional${idCapitalize}">Opcional</span>
                </div>

                <!-- Container -->
                <div class="relative rounded-md shadow-sm">                    
                    <div id="inputContainer${idCapitalize}" class="flex items-center gap-x-3 border border-gray-900/10 mt-1 rounded-md shadow-sm">                 
                        <!-- Input container -->
                        <div class="relative w-full">
                            <!-- Icono izquierda input -->
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">                                                                
                                <div class="pointer-events-none flex items-center">                                                                        
                                    <img id="icon${idCapitalize}" src="${iconSrc}" class="w-3.5 text-gray-400">
                                </div>
                            </div>                            
                            
                            <input placeholder="${placeholder}" type="${inputTipo}" name="${id}" id="input${idCapitalize}" class="rounded-md w-full py-2 pl-9 text-gray-900 border-0 text-sm leading-6">

                            <!-- Icono derecho de error -->
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center hidden" id="errorIconContainer${idCapitalize}">                                                                
                                <div class="pointer-events-none">                                                                        
                                    <svg class="w-5 text-red-500 mr-4" viewBox="0 0 20 20" fill="currentColor" >
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>                    
                    </div>                  
                </div>     

                <!-- Error -->
                <span class="mt-2 text-sm text-red-600 hidden" id="errorSpan${idCapitalize}">${errorTexto}</span>
            </div>
          `

        function capitalizeWords(text: string): string {
            const words = text.split(' ')
            const capitalizedWords = words.map((word: string) => {
                const firstLetter = word.charAt(0).toUpperCase()
                const restOfWord = word.slice(1)
                return firstLetter + restOfWord
            })
            return capitalizedWords.join(' ')
        }

        function addHidden(value: string): string {
            if (value === 'false') {
                return (value = 'hidden')
            }
        }       

        this.addEventListener('input', (): void => {
            const span = document.getElementById(
                `span${idCapitalize}`
            ) as HTMLSpanElement
            const inputValue = document.getElementById(
                `input${idCapitalize}`
            ) as HTMLInputElement
            span.textContent = inputValue.value
        })
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
    customElements.define('input-dinamico-icono', InputDinamicoConIcono)
}
