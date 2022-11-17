# 7.4 Function As A Child

## Task:
Extract the data loading logic from both components so that it is "re-usable" between components and only resides in one place. Make sure your current UIX doesn't suffer from refactoring.

Currently, each of the components: `MemorableQuotes`, `OnlyYodaQuotes` collects data separately.

We want to keep this arrangement of components, both of them should stay.
However, we need one additional component as the `Provider` of the data, which both `*Quotes.tsx` use.

1. Replace the state of the component data with the passing of this data via `props`
2. The logic for loading data from `starWarsQuotesService.getAll()` in this form can exist in one place in the code.
3. Prepare this place - a special component that will "hand out" this data to `MemorableQuotes`, `OnlyYodaQuotes` in the form of `props`
4. Use the pattern: `function` as a `children` (child).
5. Fix the typing in the project (we should not have any `:any` and see the data model clearly)



