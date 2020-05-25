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