class TrModulos extends HTMLElement {
    constructor() {
        super()
        const textoPrimeraColumna = this.getAttribute('textoPrimeraColumna')
        const id = this.getAttribute('id')
        const arrorIconVisibility = this.getAttribute('arrorIconVisibility')
        let bgColor = this.getAttribute('bgColor')

        let tachitaGrow = this.getAttribute('tachitaGrow')
        let palomitaGrow = this.getAttribute('palomitaGrow')

        let tachitaInstitutional = this.getAttribute('tachitaInstitutional')
        let palomitaInstitutional = this.getAttribute('palomitaInstitutional')

        let tachitaManufacturing = this.getAttribute('tachitaManufacturing')
        let palomitaManufacturing = this.getAttribute('palomitaManufacturing')

        let tachitaEnterprise = this.getAttribute('tachitaEnterprise')
        let palomitaEnterprise = this.getAttribute('palomitaEnterprise')

        if (bgColor === null) {
            bgColor = 'white'
        }

        // Refactorizar
        if (tachitaGrow === null) {
            palomitaGrow = ''
            tachitaGrow = 'hidden'
        }

        if (palomitaGrow === null) {
            tachitaGrow = ''
            palomitaGrow = 'hidden'
        }

        if (tachitaInstitutional === null) {
            palomitaInstitutional = ''
            tachitaInstitutional = 'hidden'
        }

        if (palomitaInstitutional === null) {
            tachitaInstitutional = ''
            palomitaInstitutional = 'hidden'
        }

        if (tachitaManufacturing === null) {
            palomitaManufacturing = ''
            tachitaManufacturing = 'hidden'
        }

        if (palomitaManufacturing === null) {
            tachitaManufacturing = ''
            palomitaManufacturing = 'hidden'
        }

        if (tachitaEnterprise === null) {
            palomitaEnterprise = ''
            tachitaEnterprise = 'hidden'
        }

        if (palomitaEnterprise === null) {
            tachitaEnterprise = ''
            palomitaEnterprise = 'hidden'
        }

        // Render HTML
        this.innerHTML = `  
        <table class="border-collapse text-center bg-${bgColor}">
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
                                    <img class="w-[2.5rem] text-blue-500 ${tachitaGrow}"
                                    src="/src/assets/icons/line.svg"/> 
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd"> 
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaInstitutional}"
                                    src="/src/assets/icons/palomita-icon.svg"/>
                                    <img class="w-[2.5rem] text-blue-500 ${tachitaInstitutional}"
                                    src="/src/assets/icons/line.svg"/> 
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaManufacturing}"
                                    src="/src/assets/icons/palomita-icon.svg"/>
                                    <img class="w-[2.5rem] text-blue-500 ${tachitaManufacturing}"
                                    src="/src/assets/icons/line.svg"/> 
                            </div>
                        </td>

                        <td class="border-b border-x border-gray-900/10 p-3 containerWidthTd">
                            <div class="flex justify-center">
                                    <img class="w-5 ${palomitaEnterprise}"
                                    src="/src/assets/icons/palomita-icon.svg"/>

                                    <img class="w-[2.5rem] text-blue-500 ${tachitaEnterprise}"
                                    src="/src/assets/icons/line.svg"/>                                   
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
        `

        function hideShowElementHidden(id) {
            const element = document.getElementById(id)
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden')
            } else {
                element.classList.add('hidden')
            }
        }

        const tooltipIcon = document.getElementById(`tooltipIcon${id}`)

        tooltipIcon.addEventListener('click', () => {
            hideShowElementHidden(`${id}Children`)
            // hideShowElementHidden(`${id}ShowIcon`)
            // hideShowElementHidden(`${id}ExitIcon`)
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
    customElements.define('tr-modulos', TrModulos)
}
