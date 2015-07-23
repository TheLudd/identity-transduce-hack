# identity-transduce-hack
=======
Let's see if Rich Hickey [delivers](http://www.youtube.com/watch?v=6mTbuzafcII&t=43m53s)!

[![Join the chat at https://gitter.im/TheLudd/identity-transduce-hack](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/TheLudd/identity-transduce-hack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Purpose

To see if it is possible to map/chain over a type that does not implement those functions but that do adhere to the transducer protocol.

Expected behavior:
```
R.map(R.add(1), Identity(1)) // => Identity(2)
```
## To all collaborators
I give access directly to this repo to simplify development. Please create your own branch and push suggestions to it.
