class InputCombobox extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')           
        const labelTexto = this.getAttribute('labeltexto')               

        // Render HTML
        this.innerHTML = `               
        <div>
            <!-- Top labels -->
            <div class="flex justify-between">
                <label for="${id}" class="text-sm font-semibold leading-6 text-gray-900">${labelTexto}</label>                
            </div>

            <!-- Container -->
            <div class="relative rounded-md shadow-sm">                    
                <div class="flex items-center gap-x-3 border border-gray-900/10 mt-1 rounded-md shadow-sm">                                                                         
                    <div class="relative w-full flex">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                            <svg class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                            </svg>
                        </div>

                        <select id="distribuidor" name="distribuidor" autocomplete="distribuidor" class="rounded-md w-full py-2.5 pl-9 bg-white text-gray-500 border-0 text-sm leading-6 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                            <option value="Steve Yi">Steve Yi</option>                       
                            <option value="Michael Jordan">Michael Jordan</option>
                        </select>
                    </div>
                </div>                  
            </div>                             
        </div>
          `       

        // this.addEventListener('input', (): void => {
          
        // })
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
    customElements.define('input-combobox', InputCombobox)
}
