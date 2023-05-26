class TrCostos extends HTMLElement {
    constructor() {
        super();
        const idAtributo = this.getAttribute('idAtributo');
        const textoPrimeraColumna = this.getAttribute('textoPrimeraColumna');
        const costoGrow = this.getAttribute('costoGrow');
        const costoInstitutional = this.getAttribute('costoInstitutional');
        const costoManufacturing = this.getAttribute('costoManufacturing');
        const costoEnterprise = this.getAttribute('costoEnterprise');
        const textoGrow = this.getAttribute('textoGrow');
        const textoInstitutional = this.getAttribute('textoInstitutional');
        const textoManufacturing = this.getAttribute('textoManufacturing');
        const textoEnterprise = this.getAttribute('textoEnterprise');
        const textoInternationalEnterprise = this.getAttribute('textoInternationalEnterprise');
        const tooltipIconVisbility = this.getAttribute('tooltipIconVisbility');
        const tooltipText = this.getAttribute('tooltipText');
        const tooltipVisibilityClass = this.getAttribute('tooltipVisibilityClass');
        // Render HTML
        this.innerHTML = `  
        <table class="border-collapse text-center">
            <tbody>             
                    <tr>
                        <th class="border-b border-x border-gray-900/10 py-3 px-1 containerWidthTh">                 
                            <div class="relative flex justify-center items-center gap-x-4">
                                <span class="w-4/6">${textoPrimeraColumna}</span> 
                                <img
                                    class="iconsWidth ${tooltipIconVisbility}"
                                    id="tooltipIcon${idAtributo}"
                                    src="/src/assets/icons/tooltip-icon.svg"
                                />
                                <div
                                    class="hidden absolute -right-60 -top-9 w-64 rounded border border-gray-900/10 bg-white p-4 text-left text-xs font-semibold text-gray-700 shadow"
                                    id="tooltipText${idAtributo}"
                                >
                                    ${tooltipText}
                                </div>
                            </div>
                        </th>

                        <td class="border-b border-r border-gray-900/10 p-3 containerWidthTd">                          
                            <div
                                class="flex items-center justify-center gap-x-1"
                            >
                                <span class="-mr-1">$</span>
                                <span id="${idAtributo}Grow">${costoGrow}</span>
                                <span class="moneda"></span>
                            </div>                                
                            <span class="text-xs">${textoGrow}</span> 
                        </td>

                        <td class="border-b border-r border-gray-900/10 p-3 containerWidthTd">                        
                            <div
                                class="flex items-center justify-center gap-x-1"
                            >
                                <span class="-mr-1">$</span>
                                <span id="${idAtributo}Institutional">${costoInstitutional}</span>
                                <span class="moneda"></span>
                            </div>  
                            <span class="text-xs">${textoInstitutional}</span> 
                        </td>

                        <td class="border-b border-r border-gray-900/10 p-3 containerWidthTd">
                        <div
                                class="flex items-center justify-center gap-x-1"
                            >
                                <span class="-mr-1">$</span>
                                <span id="${idAtributo}Manufacturing">${costoManufacturing}</span>
                                <span class="moneda"></span>
                            </div>     
                            <span class="text-xs">${textoManufacturing}</span>                             
                        </td>

                        <td class="border-b border-r border-gray-900/10 p-3 containerWidthTd">
                        <div
                                class="flex items-center justify-center gap-x-1"
                            >
                                <span class="-mr-1">$</span>
                                <span id="${idAtributo}Enterprise">${costoEnterprise}</span>
                                <span class="moneda"></span>
                            </div>  
                            <span class="text-xs">${textoEnterprise}</span>
                            
                        </td>

                        <td class="border-b border-r border-gray-900/10 p-3 containerWidthTd"> 
                        <span>${textoInternationalEnterprise}</span>                                                     
                        </td>                  
                    </tr>
            </tbody>
        </table>
        `;
        function showTooltip() {
            const tooltipText = document.getElementById(`tooltipText${idAtributo}`);
            tooltipText.classList.remove('hidden');
        }
        function hideTooltip() {
            const tooltipText = document.getElementById(`tooltipText${idAtributo}`);
            tooltipText.classList.add('hidden');
        }
        function setupTooltip() {
            const tooltipIcon = document.getElementById(`tooltipIcon${idAtributo}`);
            tooltipIcon.addEventListener('mouseover', showTooltip);
            tooltipIcon.addEventListener('mouseout', hideTooltip);
        }
        // Llamar a la función setupTooltip para configurar los event listeners
        setupTooltip();
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
    customElements.define('tr-costos', TrCostos);
}
