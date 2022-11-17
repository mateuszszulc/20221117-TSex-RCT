
const form: HTMLFormElement = document.createElement('form')
const div: HTMLDivElement = document.createElement('div')
const p: HTMLParagraphElement = document.createElement('p')

// classes HTMLFormElement, HTMLDivElement, HTMLParagraphElement etc. (every DOM element!)
// are built into the so-called Browser WebAPI:

//  https://developer.mozilla.org/en-US/docs/Web/API
//  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
//  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement ... etc.


// All these elements inherit from the base class: HTMLElement
// Proof:

console.log(form instanceof HTMLElement)
console.log(div instanceof HTMLElement)
console.log(p instanceof HTMLElement)
