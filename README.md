# javascript_project
DOM operation. Creation of plugins that give more functionality to the video player. Implementation of events in an object according to the needs of the project

# Project start
## Install live server
```terminal
$ npm i -D live-server
```

# How a script reaches the browser
The **DOM** is the browser representation of an HTML document.

The browser interprets the HTML file and when it finishes transforming it into the DOM, the DOMContentLoaded event is fired, which means that the entire document is available for manipulation.

Every script that we load on our page has a call and an execution.

Both with async and defer we can make asynchronous calls but it has its differences:
* **async**: With async we can make the request asynchronously and we are not going to stop loading the DOM until the code is executed.
* **defer**: The request is the same asynchronous as in the async but it will defer the execution of the Javascript until the end of the whole document loading.

Keep in mind that when you load a page and a script is found to execute, the whole load stops. That is why it is recommended to add your scripts just before closing the body so that the entire document is available.

# Scope
The scope is what defines the lifetime of a variable, in which parts of our code can be used.

## Global scope
Variables available globally, the word var is used, they are accessible by all the scripts that are loaded on the page. There is a lot of risk of overwriting here.

## Function Scope
Variables declared within a function only visible within itself (including the arguments passed to the function).

## Block Scope
Variables defined within a block, for example variables declared within a while or for loop. Let and const are used to declare these types of variables.

## Module Scope
When a script of type module is denoted with the attribute type = "module the variables are limited to the file in which they are declared.

# Closures
They are functions that return a function or an object with functions that keep the variables that were declared out of scope.

Closures serve to have something similar to private variables, a feature that does not have JavaScript by default. In other words, they encapsulate variables that cannot be directly modified by other objects, only by functions belonging to it.