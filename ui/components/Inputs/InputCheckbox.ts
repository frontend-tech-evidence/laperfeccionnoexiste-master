class InputCheckbox extends HTMLElement {
constructor() {
super()

this.innerHTML = `
<div class="flex items-center gap-x-2">
    <label for="distribuidorCheckbox" class="text-sm font-medium leading-6 text-gray-900">Soy distribuidor</label>
    <input type="checkbox" name="distribuidorCheckbox" id="distribuidorCheckbox" autocomplete>
</div>
` 

    function hideShowElementHidden(id: string) {
        const element = document.getElementById(id)
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden')
            element.classList.add('flex')
        } else {
            element.classList.add('hidden')
            element.classList.remove('flex')
        }
    }

    this.addEventListener('change', (): void => {
        hideShowElementHidden("containerDistribuidor")
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
customElements.define('input-checkbox', InputCheckbox)
}