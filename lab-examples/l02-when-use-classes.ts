/*
    <div>
        <my-component></my-component>
    </div>

*/

class MyComponent extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = `<b>HELLO</b> Component`
    }
}

customElements.define('my-component', MyComponent)
