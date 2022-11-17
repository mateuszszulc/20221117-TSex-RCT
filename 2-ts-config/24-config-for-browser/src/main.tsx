import React from 'react'
import { render } from 'react-dom';
import { App } from './App.js'

const $root = document.getElementById('root');

if($root) {
   render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
       $root
    )
} else {
    document.body.innerHTML = `root Element not found on page...😭`
}

/**
 * BTW.
 *
 * Aside from React itself, the fact that TypeScript type hint
 * syntax for the browser + built-in classes in the DOM (Web APIs) is awesome
 * https://developer.mozilla.org/en-US/docs/Web/API
 *
 *
 * Note the built-in Browser-native classes below:
 * HTMLElement, HTMLParagraphElement, HTMLDivElement
 *
 * */

const myDomElement = document.createElement('p');

const investigation = [
    {question: 'is HTML element?', answer: myDomElement instanceof HTMLElement},
    {question: 'is paragraph?', answer: myDomElement instanceof HTMLParagraphElement},
    {question: 'is div?', answer: myDomElement instanceof HTMLDivElement}
]
console.table(investigation)
