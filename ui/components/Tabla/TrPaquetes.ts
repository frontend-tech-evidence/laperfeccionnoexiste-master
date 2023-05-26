class TrPaquetes extends HTMLElement {
    constructor() {
        super()
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
                        <th class="border-b border-x border-gray-900/10 py-3 px-2 containerWidthTh"></th>                                                
                        <th class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoGrow}</th>
                        <th class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoInstitutional}</th>
                        <th class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoManufacturing}</th>
                        <th class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoEnterprise}</th>
                        <th class="border-b border-x border-gray-900/10 p-3 containerWidthTd">${textoInternationalEnterprise}</th>
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
    customElements.define('tr-paquetes', TrPaquetes)
}
