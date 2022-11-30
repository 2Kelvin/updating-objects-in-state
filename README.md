# updating-objects-in-state

In this read, concepts I learn are:

- useState can take an object as a value (for its state variable)
- whenever you want to update a state variable holding an object as the value, `dont mutate the object`. Instead, `create a new object or make a new copy of the object` and then set it as the updated state
