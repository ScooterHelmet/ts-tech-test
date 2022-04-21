# Interledger Technical Test for the [TypeScript Developer Role](https://interledger-foundation.breezy.hr/p/660ff8e7ba21-typescript-developer)

## Logistics
This challenge is intended to be done at home. You should write the code in TypeScript and you may use any resources you like. You are encouraged to use any libraries that you find helpful.

We will schedule a review session afterwards with one or two of the engineers working on [rafiki](https://github.com/interledger/rafiki), via video call. We will ask you to discuss your solution, explain your design choices and pair-program a feature live.

_Please do not share this challenge or your solution to it._

## Challenge
A “peering relationship” is a way to keep track of debt between two parties. The peering relationship balance starts at 0 and both parties independently track their views of the balance. If Alice owes Bob $10, then Alice sees a balance of -10 and Bob sees a balance of 10. If Alice sends Bob $10 more, then her balance would be -20, and Bob’s balance would be 20.

Write a program that implements a peering relationship and exposes an interactive Command Line Interface. Once both users start the interactive prompt, they should be able to send money to the other user and view their own balance.

### Constraints

- Each user keeps track of their own balance
- Assume the users are on different computers
- State does not have to persist between sessions
- State should not be tracked or stored remotely (i.e. on a server)

### Example Terminal Output

#### Alice

```sh
$ ./start-peer ... # (plus connection options)
Welcome to your peering relationship!
> balance
0
> pay 10
Sent
> balance
-10  # (other balance is now 10)
> exit
Goodbye.
```

#### Bob

```sh
$ ./start-peer ... # (plus connection options)
Welcome to your peering relationship!
> balance
0
You were paid 10!
> balance
10
> exit
Goodbye.
```
