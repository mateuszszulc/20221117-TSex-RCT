/**
 *
 * With the `tsc --init` command, we generate the tsconfig.json file
 *
 * Task:
 *
 * Make sure you are on this path [21-init-my-config](/2-ts-config/21-init-my-config/) in terminal.
 * 1. Execute the command:
 *
 * ```
 * tsc --init
 * ```
 *
 * if it doesn't work - install typescript globally:
 *
 * ```
 * npm i -g typescript
 * ```
 *
 * and try again.
 *
 * 2. Set in tsconfig.json:
 *  - "outDir": "dist"
 *  - "rootDir": "src"
 *
 * 3. Pack existing files into ./src/*.ts directory
 *
 * 4. Run the "tsc" command in the terminal and see what happens.
 * */

import type { Fireworks } from './Fireworks'

const myFunction: Fireworks = () => 'Boom!'

console.log(myFunction())


