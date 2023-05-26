class SectonInfo extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')
        const texto = this.getAttribute('texto')
        const exitIconDefaultVisibility = this.getAttribute(
            'exitIconDefaultVisibility'
        )
        const showIconDefaultVisibility = this.getAttribute(
            'showIconDefaultVisibility'
        )
        const wantToChangeIconDefaultVisibility = this.getAttribute(
            'wantToChangeIconDefaultVisibility'
        )

        const wantToShowChildren = this.getAttribute('wantToShowChildren')

        // Render HTML
        this.innerHTML = `               
        <!-- Row -->  
        <table class="containerWidthTabla border-collapse text-center">
            <tbody>             
                    <tr id="${id}">                        
                        <td class="bg-[#f3f6f9] text-blue-500 border-b border-x border-gray-900/10 py-5 flex justify-center items-center gap-x-2">
                            <span class="font-bold"> ${texto} </span>
                            <svg id="${id}ShowIcon" class="${exitIconDefaultVisibility} h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
                            </svg>
                            <svg id="${id}ExitIcon" class="${showIconDefaultVisibility} h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>    
                        </td>                    
                    </tr>
            </tbody>
        </table>
                `

        function hideShowElementHidden(id) {
            if (wantToChangeIconDefaultVisibility === 'true') {
                const element = document.getElementById(id)
                if (element.classList.contains('hidden')) {
                    element.classList.remove('hidden')
                } else {
                    element.classList.add('hidden')
                }
            }
        }

        function defaultChildrenVisibility(id) {
            if (wantToShowChildren === 'false') {
                hideShowElementHidden(`${id}Children`)
            }
        }

        this.addEventListener('click', () => {
            hideShowElementHidden(`${id}Children`)
            hideShowElementHidden(`${id}ShowIcon`)
            hideShowElementHidden(`${id}ExitIcon`)
        })

        defaultChildrenVisibility(`${id}`)
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
    customElements.define('section-info', SectonInfo)
}
