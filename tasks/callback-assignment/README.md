\# Callback Assignment



\## Overview

This assignment demonstrates how callback functions work in JavaScript, particularly when handling asynchronous operations.



\## Learning Objectives

\- Understand callback functions.

\- Work with asynchronous JavaScript using `setTimeout()`.

\- Pass functions as arguments to other functions.

\- Handle errors using `try...catch`.

\- Understand basic asynchronous error handling.



\## Implementation



\### 1. fetchDataWithCallback(callback)

This function simulates an asynchronous data-fetching operation using `setTimeout()` with a 2-second delay.



It accepts a callback function as an argument.



Inside the timeout:

\- An error flag is set to `true`.

\- A `try...catch` block handles potential errors.

\- When the error flag is true, an error with the message `Fetch failed` is thrown.

\- If no error occurs, the callback receives the message `Data fetched`.

\- If an error occurs, the catch block logs the error message.



\### 2. handleData(result)

This callback function receives a result and displays it in the console.



\### 3. Function Invocation

The assignment calls `fetchDataWithCallback(handleData)`, passing `handleData` as the callback function.



\## How to Run



1\. Make sure Node.js is installed.

2\. Open a terminal in this assignment folder.

3\. Run:



```bash

node fetchDataCallback.js

```



\## Expected Output



Because the error flag is currently set to `true`, the output is:



```text

Error: Fetch failed

```



The successful callback message (`Data fetched`) will not appear unless the error flag is changed to `false`.



\## Technologies Used

\- JavaScript

\- Node.js

\- Asynchronous Programming

\- Callback Functions

\- Error Handling



\## Author

Abubakar Usman Muhammad

