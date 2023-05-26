class InputSwitch extends HTMLElement {
    constructor() {
        super();
        const id = this.getAttribute('id');
        const texto = this.getAttribute('texto');
        const idCapitalize = capitalizeWords(id);
        const textoDescuento = this.getAttribute('textoDescuento');
        const textoLabelFalse = this.getAttribute('textoLabelFalse');
        const textoLabelTrue = this.getAttribute('textoLabelTrue');
        // Render HTML
        this.innerHTML = `                        
           <div class="flex w-[12rem] flex-col">
                        <!-- Texto -->
                        <div class="flex items-center gap-x-1">                     
                            <span class="text-sm leading-6 text-gray-900">${texto}</span>
                        </div>
                        
                        <div class="relative mt-2 flex flex-col justify-center gap-y-1">
                            <!--- Etiqueta de descuento --->
                            <span id="${idCapitalize}LabelDescuento"
                                class="absolute left-[-30px] top-[-19px] flex rounded-full px-2 py-1 text-[.6rem] font-bold capitalize text-blue-500 underline">${textoDescuento}</span>

                            <!-- Input -->
                            <div class="flex flex-row items-center gap-x-2">
                                <span class="text-sm">${textoLabelFalse}</span>

                                <label class="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" class="peer sr-only" id="${idCapitalize}"/>
                                    <div
                                        class="peer h-8 w-16 rounded-full border border-gray-300 bg-white px-3.5 py-2 shadow-sm ring-gray-300 after:absolute after:left-[.5rem] after:top-1 after:h-[1.5rem] after:w-6 after:rounded-full after:bg-blue-500 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500">
                                    </div>
                                </label>

                                <span class="text-sm">${textoLabelTrue}</span>
                            </div>
                        </div>
                    </div>
          `;
        function capitalizeWords(text) {
            const words = text.split(' ');
            const capitalizedWords = words.map((word) => {
                const firstLetter = word.charAt(0).toUpperCase();
                const restOfWord = word.slice(1);
                return firstLetter + restOfWord;
            });
            return capitalizedWords.join(' ');
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
    customElements.define('input-switch', InputSwitch);
}
