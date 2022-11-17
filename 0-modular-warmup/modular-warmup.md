# Modular warmup.

> Your TypeScript - *ALWAYS*, by the end of the day must become JavaScript
> 
> _~ Paulo Typescriptelho_

In `2009` when **Node.js** is released, one of its _breaking changes_ to the classic `JS` way of work are modules.

- _Module_ - in the `JS` world refers to a separate file whose scope "does not leak". The programmer determines which values will be available externally. Another module can then explicitly import them.

**Node.js** introduces its own syntax for handling modules, the so-called `commonJS`.

```javascript
const sth = require('./module')

moudule.exports = { 
  sthElse: 200
}
```  

---

In `2015` comes renewed **JavaScript** with modules. The syntax is called `esm` (_Ecma Script Modules_) and is different from `commonjs`.

```javascript
import sth from './module.js'

export const sthElse = 200;
``` 

---

> _How does this relate to `TypeScript`?_


## Typescript vs. modules

Generally in `TS` we use "modern" syntax `esm` straight like in _bundlers_ because you don't need to add `.js` extension at the end of the file

So the imports in `TS` look like this:
```javascript
import sth from './module'

export const sthElse = 200;
``` 

It is worth learning the syntax of various module approaches in `JavaScript`, because later, depending on the `tsconfig.json` settings - our resulting `JS` will be generated with the method of importing / exporting modules chosen by us. By default it will build to `commonjs`.
