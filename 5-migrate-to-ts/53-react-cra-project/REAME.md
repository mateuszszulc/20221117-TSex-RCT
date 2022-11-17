# Migrating a React project

Assuming we used [create-react-app](https://create-react-app.dev). We will use the documentation on adding `typescript` to the project:

- [adding-typescript](https://create-react-app.dev/docs/adding-typescript/)

We will migrate the project:
[6-power-your-project-with-typescript](../../6-power-your-project-with-typescript)

### Important

> We will want to carry out the migration in stages "step-by-step"


We assume that:
- we need to stretch the migrations over time
- we have several "sprints" for this
- the project is so big that we can't do it "in one go"

### Sequence of actions (commits)

1. Installing [typescript](https://www.npmjs.com/package/typescript)
   - we will apply initial steps similar to _adding-typescript_ in _CRA_
   - we will install the other needed packages with types
2. Generate `tsconfig.json`
3. Allowing `implicitAny`
4. Changing the `index.js` file to `index.tsx`
5. Change other files to `.tsx` and `.ts`
6. Adding appropriate types for existing files
7. Visiting the documentation of the tools used, e.g. [usage-with-typescript](https://redux.js.org/usage/usage-with-typescript) for Redux
8. Adding appropriate types for data models in the application
9. Check type safety settings + restore `noImplicitAny`.


#### More:
- https://react-typescript-cheatsheet.netlify.app/docs/migration/from_js  
- https://speakerdeck.com/amhinson/convert-a-react-native-project-to-typescript-in-10-minutes

#### Handy plug-in:
- https://plugins.jetbrains.com/plugin/17063-regex-rename-files
