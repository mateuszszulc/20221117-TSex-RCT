// We trick tsc into thinking we have React installed (actually, they're just definitions)
import * as React from './React'
// However, the import will persist, so if we put this file into the React project before the "bundle" step - it would work.
/**
 * Typescript understands the "JSX" syntax, along with the "jsx" option in tsconfig.json
 *
 *
 * Try to execute on this path:
 * ```
 * tsc
 * ```
 *
 * // If there was no import at the top then:
 * We will get an error related to the lack of React (because we don't have it installed here - in ./15-bonus-...)
 * However, JSX will still be rewritten correctly to JS
 *
 * We now "provide" TS with React with a proper type definition file.
 * In the demo variant, this is enough.
 * */

export function HelloWorld() {
    return (
        <div className="hello-world" >
          <p style={{color: 'blue'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias animi aut commodi facilis itaque obcaecati! Accusamus autem cumque enim ex harum in, maiores mollitia repellat ullam, voluptas voluptate voluptates!
          </p>
        </div>
    )
}
