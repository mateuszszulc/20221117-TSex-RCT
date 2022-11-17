import * as React from 'react'
import { ReactNode } from 'react'

// Note: JSX exists in the global namespace of /@types/react/index.d.ts

const reactElement: JSX.Element = <div></div>

function ReactComponent(): JSX.Element {
    return <>
        Hello !
    </>
}

function ComposableComponent({ children = [] } : {children?: JSX.Element | JSX.Element[]}) {
    return (
        <section>
            <div>My values:</div>
            <ul>{ children }</ul>
        </section>
    )
}

// Typechecking:
// const exampleInvalidImplementation = (<main><ComposableComponent>{''}</ComposableComponent></main>)

const exampleImplementationValid = (<main>
    <ComposableComponent>
         <li>1</li>
         <li>2</li>
         <li>3</li>
    </ComposableComponent>
</main>)

const exampleImplementationValid2 = (<main>
    <ComposableComponent>
        <li>0</li>
    </ComposableComponent>
</main>)


function MoreFlexibleComposableComponent({ children = '' } : {children?: ReactNode | ReactNode[]}) {
    return (
        <section>
            <ul>{ children }</ul>
        </section>
    )
}

const sample1 = (<MoreFlexibleComposableComponent></MoreFlexibleComposableComponent>)
const sample2 = (<MoreFlexibleComposableComponent>2</MoreFlexibleComposableComponent>)
const sample3 = (<MoreFlexibleComposableComponent>{2}</MoreFlexibleComposableComponent>)
const sample4 = (<MoreFlexibleComposableComponent>{true}</MoreFlexibleComposableComponent>)


// https://react-typescript-cheatsheet.netlify.app/
