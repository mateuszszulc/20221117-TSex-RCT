# 7.3 My Own Hook

## Task:
Design your own hook: `useQuotes('')`.

Its task will be, after use in the component,
- getting data from `swQuotesService.getAll()`
- data filtering by the passed parameter `('')`
- running the query in the lifecycle `onMount` action

For example: quotes only _Yoda_, should be obtained by calling the hook together with the name of the author, e.g.:

```javascript
useQuotes('Yoda')
```

In this case:
```javascript
useQuotes('')
```
we'll get all the quotes.

Implement your solution in components and confirm if it works.
Use the right types.

#### Bonus (additional task):
- How to design a hook so that it can be used for different data models, for example:
  - we ask different _endpoints_, and we can configure it from the `hook` call
  - various types of data are returned from the _back-end_
