# updating-objects-in-state

![updatingObjs](https://user-images.githubusercontent.com/85868026/205668092-3a72cec4-03fd-464e-a1b1-f246ae102ce8.png)

In this read, here are all the concepts I learnt:

- the state variable can store `all Javascript values` => strings, numbers, booleans, objects, arrays
- strings, booleans & numbers values storedd in a state variable are `immutable`. That is, you don't really change them. What React actually does when you update them them is it `triggers a render` and `replaces these values`
- whenever you want to update a state variable holding an object as the value, `don't mutate the object`. That is, `don't change the object directly`. Instead, `create a new object or make a new copy of the object` and then set it as the updated state
- technically, unlike the above Javascript values, it's possible to change/ mutate an object & its properties but you should NEVER do so. `Treat objects as immutable values` just like the rest of the Javascript values. So when you want to update the state carrying an object, `always replace the object`
- `state is read-only, you should not mutate it you should replace it`
- `local mutation`: creating a new javascript object that isn't referenced or depended anywhere in the code, updating it with new values then setting it to state. Local mutation is safe to do because changing it won't break anything since no code is linked to it yet. This makes local mutation okay to do even while rendering.
- using the `spread operator`: you create a new object then using the spread operator, copy the existing object's data into it & then replace the property that has changed with its new values. The spread oprator is `shallow`, it only copies things `one level deep`. To update nested properties, you'll have to use the spread operator more than once i.e. a spread operator for each nested object you want to update to
- objects inside other objects aren't really nested. The code sees them as two different objects and that the property is just `a pointer/ reference to the object itself`
- `immer`: it's a tool you can use to update objects in state. It acts as if it's breaking the rules by mutating the object, but it really isn't. Behind the scenes it's creating copies of the objects for you. You can use this if you need to update deeply nested objects in your code. Immer uses the `draft` object to figure out the object in state you need updated & then goes ahead to create a copy of it and updates it. So basically, `you mutate immer's draft object & in turn it updates the state with your new object`. Immer keeps your code concise since using the spread operator a lot creates a lot of repetitive code
- this is the object spread syntax to create a new object copy with old unchanged data/ properties & updated the property: `{...obj, objPropUpdated: "newValue"}`
