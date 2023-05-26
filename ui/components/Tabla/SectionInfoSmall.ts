class SectionInfoSmall extends HTMLElement {
    constructor() {
        super()

        const texto = this.getAttribute('texto')
        const tooltipIconVisbility = this.getAttribute('tooltipIconVisbility')
        const id = this.getAttribute('id')
        const tooltipText = this.getAttribute('tooltipText')
        const bgColor = this.getAttribute('bgColor')
        const textColor = this.getAttribute('textColor')

        // Render HTML
        this.innerHTML = `                            
        <table class="containerWidthTabla border-collapse text-center">
            <tbody>             
                    <tr>                        
                        <td class="bg-${bgColor} border-b border-x border-gray-900/10 p-3 flex justify-center items-center gap-x-2">
                            <div class="relative">
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
                            
                            <span class="text-${textColor}">
                            ${texto}
                            </span>
                        </td>                    
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
    customElements.define('section-info-small', SectionInfoSmall)
}
