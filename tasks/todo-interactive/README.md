\# Interactive To-Do List



\## Overview

This project is a simple interactive To-Do List built with HTML, CSS, and JavaScript. It allows users to mark tasks as completed or uncompleted by clicking on them.



\## Learning Objectives

\- Understand JavaScript DOM manipulation.

\- Select HTML elements using `document.querySelectorAll()`.

\- Handle user interactions with event listeners.

\- Use `classList.toggle()` to dynamically change CSS classes.

\- Connect JavaScript functionality with CSS styling.



\## Features

\- Displays four sample tasks.

\- Allows users to click a task to mark it as completed.

\- Changes the task text colour to green when completed.

\- Applies a strikethrough to completed tasks.

\- Displays a checkmark beside completed tasks.

\- Allows users to click again to undo task completion.



\## Project Structure



```text

todo-interactive/

├── index.html

├── style.css

├── script.js

└── README.md

```



\## Implementation



\### 1. HTML (index.html)

Provides the structure of the application, including the heading, task list, and links to the CSS and JavaScript files.



\### 2. CSS (style.css)

Controls the appearance of the task list.



\- Styles the list items and layout.

\- Hides the completion checkmark by default.

\- Changes completed tasks to green.

\- Applies a strikethrough to completed task text.

\- Reveals the checkmark when a task is completed.



\### 3. JavaScript (script.js)

Adds interactivity to the task list.



\- Uses `document.querySelectorAll("li")` to select all task items.

\- Uses `forEach()` to attach a click event listener to each item.

\- Uses `classList.toggle("completed")` to switch between completed and uncompleted states.



\## How to Run



1\. Download or clone this repository.

2\. Navigate to the `tasks/todo-interactive` folder.

3\. Open `index.html` in a web browser.

4\. Click any task to mark it as completed.

5\. Click the task again to undo completion.



No additional packages or installations are required.



\## Technologies Used

\- HTML5

\- CSS3

\- JavaScript

\- DOM Manipulation

\- Event Listeners



\## Author

Abubakar Usman Muhammad

