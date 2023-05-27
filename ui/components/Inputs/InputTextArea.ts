class InputTextArea extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')
        const idCapitalize = capitalizeWords(id)
        const labelTexto = this.getAttribute('label')
        const placeholder = this.getAttribute('placeholder')
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
            
            <div class="mt-2.5">
                <textarea autocomplete="off" name="input${idCapitalize}" id="input${idCapitalize}" rows="4" placeholder="${placeholder}" class="block w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-blue-500 text-sm leading-6"></textarea>
            </div>
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
    customElements.define('input-textarea', InputTextArea)
}
