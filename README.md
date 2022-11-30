# updating-objects-in-state

In this read, here are all the concepts I learnt:

- the state variable can store `all Javascript values` => strings, numbers, booleans, objects, arrays
- strings, booleans & numbers values storedd in a state variable are `immutable`. That is, you don't really change them. What React actually does when you update them them is it `triggers a render` and `replaces these values`
- whenever you want to update a state variable holding an object as the value, `don't mutate the object`. That is, `don't change the object directly`. Instead, `create a new object or make a new copy of the object` and then set it as the updated state
- technically, unlike the above Javascript values, it's possible to change/ mutate an object & its properties but you should NEVER do so. `Treat objects as immutable values` just like the rest of the Javascript values. So when you want to update the state carrying an object, `always replace the object`
- `state is read-only, you should not mutate it you should replace it`
- `local mutation`: creating a new javascript object that isn't referenced or depended anywhere in the code, updating it with new values then setting it to state. Local mutation is safe to do because changing it won't break anything since no code is linked to it yet. This makes local mutation safe to do even while rendering.
