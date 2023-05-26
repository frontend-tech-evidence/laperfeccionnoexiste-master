class Tr extends HTMLElement {
    constructor() {
        super()
        const textoPrimeraColumna = this.getAttribute('textoPrimeraColumna')
        const textoGrow = this.getAttribute('textoGrow')
        const textoInstitutional = this.getAttribute('textoInstitutional')
        const textoManufacturing = this.getAttribute('textoManufacturing')
        const textoEnterprise = this.getAttribute('textoEnterprise')
        const textoInternationalEnterprise = this.getAttribute(
            'textoInternationalEnterprise'
        )
        const tooltipIconVisbility = this.getAttribute('tooltipIconVisbility')
        const id = this.getAttribute('id')
        const tooltipText = this.getAttribute('tooltipText')
        const tooltipVisibilityClass = this.getAttribute(
            'tooltipVisibilityClass'
        )

        // Render HTML
        this.innerHTML = `  
        <table class="border-collapse text-center">
            <tbody>             
                    <tr>
                        <th class="border-b border-x border-gray-900/10 py-3 px-2 containerWidthTh">
                            <div class="flex justify-center items-center gap-x-4">
                                <span class="w-4/6">${textoPrimeraColumna}</span> 

                                <div class="relative ${tooltipVisibilityClass}">
                                    <img
                                        class="iconsWidth ${tooltipIconVisbility}"
                                        id="tooltipIcon${id}"
                                        src="/src/assets/icons/tooltip-icon.svg"
                                    />
                                    
                                    <div
                                        class="hidden absolute left-5 top-0 w-64 rounded border border-gray-900/10 bg-white p-4 text-left text-xs font-semibold text-gray-700 shadow"
                                        id="tooltipText${id}"
                                    >
                                        ${tooltipText}
                                    </div>
                                </div>
                            </div>
                           
                        </th>
                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoGrow}</td>
                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoInstitutional}</td>
                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoManufacturing}</td>
                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoEnterprise}</td>
                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoInternationalEnterprise}</td>
                    </tr>
            </tbody>
        </table>
        `

        function showTooltip() {
            const tooltipText = document.getElementById(`tooltipText${id}`)
            tooltipText.classList.remove('hidden')
        }

        function hideTooltip() {
            const tooltipText = document.getElementById(`tooltipText${id}`)
            tooltipText.classList.add('hidden')
        }

        function setupTooltip() {
            const tooltipIcon = document.getElementById(`tooltipIcon${id}`)

            tooltipIcon.addEventListener('mouseover', showTooltip)
            tooltipIcon.addEventListener('mouseout', hideTooltip)
        }

        // Llamar a la función setupTooltip para configurar los event listeners
        setupTooltip()
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
    customElements.define('tr-texto', Tr)
}
