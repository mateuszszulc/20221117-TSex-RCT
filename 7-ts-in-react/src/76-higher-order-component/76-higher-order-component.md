# 7.6 Higher Order Component
   
### Background:
Let's imagine that it's a sad era of _Dinosaurs_, in `React` we don't have `hooks` and we can't deal with the existing problem except by using `HOC` composition (_Higher Order Component_)
         
### Problem:
We pass the: `todayIs: Date` down to all components that need it directly from [AppWithHigherOrderComponents](./AppWithHigherOrderComponents.tsx).

In the case of [ShowUSADate](./components/ShowUSADate.tsx) and [ShowEUDate](./components/ShowEUDate.tsx) it is not much of a challenge and is ok. Because we have them in the `parent-child` relation.
The problem is how the `props` `date` is delivered to the component [IAlsoNeedADate](./components/DeeplyNestedComponentStructure/IAlsoNeedADate.tsx). 
Props drilling occurs here because we have to pass this props through several intermediate components that don't use it at all.

### Task:
Prepare a higher-order component: `withDate` with appropriate typing, so that it can be wrapped around the base component and supplied with `date` as `prop`.

