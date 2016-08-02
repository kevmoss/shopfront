# Redux Vending Machine

Redux is a 'predictable state container for JavaScript apps'. Say what?
It's basically a very intuitive way to manage your application state, as
opposed to UI state (such as whether something is visible or not, or
whether a particular filter has been applied). UI state is managed by 
React, application state is managed by Redux.

Redux is proving so popular that it's already gaining traction in the 
Angular 2 community, and it's the de facto *flux* implementation in the
React community. We would recommend that you read about the subtle differences
between a true *flux* implementation and Redux at the end of this week,
and not before.

## Sprint Goals

1. Get used to using Redux with a relatively simple app
2. Understand the constituent parts to redux, namely:
    a. [actions](http://redux.js.org/docs/basics/Actions.html) (basically 
    just objects)
    b. action creators (basically just functions that return objects)
    c. [reducers](http://redux.js.org/docs/basics/Reducers.html) (basically 
    just functions that take the old state and an action as arguments, 
    and return the new state)
    d. [stores](http://redux.js.org/docs/basics/Store.html), which are 
    created with reducers, and allow you to dispatch actions, access the 
    state and register listeners. 
    

## Objective

Create a Redux vending machine with NO UI at this stage. (If you want more
of a challenge, create a Redux shopping cart).

Imagine yourself standing in front of a vending machine, and list the 
real-world actions you can perform that change the state of a real-world 
vending machine (e.g. inserting a coin). These form the basis of your redux actions.

As you do this, try and work out how you could model the application's state
using a single JavaScript object - build out that object as you come up with
more and more actions.

You will ultimately change the state, via the devtools console, by dispatching
actions using the dispatch method on the store. All will be revealed soon
enough.

## ES6 code

Feel free to ask what's going on when you come across ES6 code in a tutorial and you don't understand it.

## Resources

Redux has some excellent [resources](http://redux.js.org/docs/introduction/Ecosystem.html)
In particular, there is a great free video series by the author of redux on egghead.io and
the documentation is excellent.
This [video](https://www.youtube.com/watch?v=WIqbzHdEPVM&list=PLb0IAmt7-GS0M8Q95RIc2lOM6nc77q1IY&index=4) from about the 10th minute
is worth visiting and revisiting until you 'get it'. The corresponding text format is [here](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.xnmd6w1xp)