# identity-transduce-hack
Let's see if Rich Hickey delivers!

## Purpose

To see if it is possible to map/chain over a type that does not implement those functions but that do adhere to the transducer protocol.

Expected behavior:
```
R.map(R.add(1), Identity(1)) // => Identity(2)
```
## To all collaborators
I give access directly to this repo to simplify development. Please create your own branch and push suggestions to it.
