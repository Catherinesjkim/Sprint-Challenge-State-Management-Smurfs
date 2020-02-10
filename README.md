# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build a Smurfs village utilizing context or Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [X] What problem does the context API help solve?

  As with most component-based frontend frameworks, passing some form of data from one component to another is usually a real need. Typically it comes in the form of passing data from a parent to a child component or even child to parent components. This leads to components having data they don’t actually need, but they need to pass on down the tree. This gets cumbersome pretty fast especially for certain types of props (e.g. locale preference, UI themes, language settings, etc.) that are required by many different components within an application. The context API aims to solve this problem, and provides a way to share data values like this between components without having to pass a prop through every level of the app tree. 

- [X] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Redux can be described in three fundamental principles. 

1. Actions: State is read-only. The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes. 

2. Reducers: Changes are made with pure functions. To specify how the state tree is transformed by actions, you write pure reducers. Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination. 

3. Why is the Store known as a ‘single source of truth’ in a redux application? Because the state of your whole application is stored in an object tree within a single store. This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. It also makes it easier to debug or inspect an application. It also enables you to persist your app’s state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all your state is stored in a single tree.

- [X] What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call “stores” to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it. Component state however lives within that specific component. As such, it can only be updated within that component and passed down to its children via props. 
When would be a good time to use one over the other? Component state is stored locally within a component and is not accessible from other components unless it’s explicitly passed as props to its sub components. When the number of components increases, the passing of props starts becoming cumbersome. Where as redux (app state) is a centralized global store which is accessible to any component that subscribes to the store.

- [X] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed. A thunk is a concept in programming where a function is used to delay the evaluation/calculation of an operation. Thunk = function. It’s a special (and uncommon) name for a function that’s returned by another.

  Since it’s kind of annoying to write the objects by hand all the time (not to mention error-prone), Redux has the concept of “action creators” to stamp these things out. It’s the same exact action, but now you can “create” it by calling the userLoggedIn function. This just adds one layer of abstraction. Instead of writing the action object yourself, you call the function, which returns the object. If you need to dispatch the same action in multiple places around your app, writing action creators will make your job easier. 

- [X] What is your favorite state management system you've learned and this sprint? Please explain why!

      I like Redux without props drilling because I can use DRY method and it has less bugs. Replaced mapStateToProps with Redux hooks like useSelector and useDispatch. The code looks much cleaner and less buggy!

## Project Set Up

Follow these steps to set up your project:

- [X] `fork & clone` this repository.
- [X] `cd` into the forked copy of this repository.
- [X] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [X] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [X] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [X] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [X] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [X] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
- [X] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [X] Plan and implement how you are going to manage your state for your application
- [X] You _must_ use either context or Redux as your state management system
- [X] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [X] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

- [X] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [X] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

### POST '/smurfs'

- [X] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [X] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```
