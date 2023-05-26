class TrModulos extends HTMLElement {
    constructor() {
        super();
        const textoPrimeraColumna = this.getAttribute('textoPrimeraColumna');
        const id = this.getAttribute('id');
        const arrorIconVisibility = this.getAttribute('arrorIconVisibility');
        const tachitaGrow = this.getAttribute('tachitaGrow');
        const palomitaGrow = this.getAttribute('palomitaGrow');
        const tachitaInstitutional = this.getAttribute('tachitaInstitutional');
        const palomitaInstitutional = this.getAttribute('palomitaInstitutional');
        const tachitaManufacturing = this.getAttribute('tachitaManufacturing');
        const palomitaManufacturing = this.getAttribute('palomitaManufacturing');
        const tachitaEnterprise = this.getAttribute('tachitaEnterprise');
        const palomitaEnterprise = this.getAttribute('palomitaEnterprise');
        // Render HTML
        this.innerHTML = `  
        <table class="border-collapse text-center">
            <tbody>             
                    <tr>
                        <th class="border-b border-x border-gray-900/10 py-3 px-2 containerWidthTh">
                            <div class="flex justify-center items-center gap-x-4">
                                <span class="w-5/6">${textoPrimeraColumna}</span>                              
                                    <img
                                        class="w-3 ${arrorIconVisibility}"
                                        id="tooltipIcon${id}"
                                        src="/src/assets/icons/triangulo-derecha.svg"
                                    />                                                                 
                            </div>
                           
                        </th>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd"> 
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaGrow}"
                                    src="/src/assets/icons/palomita-icon.svg"/>
                                    <hr class="${tachitaGrow} border-t border-gray-300 my-4">
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd"> 
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaInstitutional}"
                                    src="/src/assets/icons/palomita-icon.svg"/>
                                    <hr class="${tachitaInstitutional} border-t border-gray-300 my-4">
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaManufacturing}"
                                    src="/src/assets/icons/palomita-icon.svg"/>
                                    <hr class="${tachitaManufacturing} border-t border-gray-300 my-4">
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaEnterprise}"
                                    src="/src/assets/icons/palomita-icon.svg"/>
                                    <hr class="${tachitaEnterprise} border-t border-gray-300 my-4">
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">
                            <div class="flex justify-center">
                                    <img class="w-5" 
                                    src="/src/assets/icons/palomita-icon.svg"/>                                    
                            </div>
                        </td>
                    </tr>
            </tbody>
        </table>
        `;
        function hideShowElementHidden(id) {
            const element = document.getElementById(id);
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
            }
            else {
                element.classList.add('hidden');
            }
        }
        const tooltipIcon = document.getElementById(`tooltipIcon${id}`);
        tooltipIcon.addEventListener('click', () => {
            hideShowElementHidden(`${id}Children`);
            // hideShowElementHidden(`${id}ShowIcon`)
            // hideShowElementHidden(`${id}ExitIcon`)
        });
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
    customElements.define('tr-modulos', TrModulos);
}
