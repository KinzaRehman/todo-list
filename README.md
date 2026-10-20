
# 🍓 Strawberry Matcha To-Do List

A playful, interactive running to-do list designed with a strawberry-and-matcha-inspired theme.

This project was created by **Kinza Rehman** as part of my software engineering journey with Resilient Coders. It helped me practice DOM manipulation, event handling, responsive design, and deploying a complete web application with GitHub Pages.

## Live Application

[Open the Strawberry Matcha To-Do List](https://kinzarehman.github.io/Ktodo-list/)

## Features

Users can:

* Add new tasks by clicking the **Add Item** button
* Add tasks by pressing the Enter key
* Mark tasks as completed
* See completed and uncompleted task totals
* Edit and save existing tasks
* Save an edited task by pressing Enter
* Delete individual tasks
* Reset the entire list
* Receive an alert after completing every task
* Use an animated strawberry cursor on desktop

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM manipulation
* JavaScript event listeners
* Git
* GitHub
* GitHub Pages
* Visual Studio Code
* Google Fonts
* GIPHY

## How the Counters Work

The application counts every task inside the task list.

```javascript
const totalTasks = listContainer.children.length;
```

It then counts the checked tasks:

```javascript
const completedTasks = listContainer.querySelectorAll(
    "input[type='checkbox']:checked"
).length;
```

The number of uncompleted tasks is calculated by subtracting the completed tasks from the total:

```javascript
const uncompletedTasks = totalTasks - completedTasks;
```

The counters update whenever a user:

* Adds a task
* Checks or unchecks a task
* Deletes a task
* Resets the list

## Project Structure

```text
Ktodo-list/
├── index.html
├── README.md
├── css/
│   ├── normalize.css
│   ├── reset.css
│   └── style.css
├── img/
│   └── Fruit Strawberry Sticker by Elsa Isabella.gif
└── js/
    └── main.js
```

## Run the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/KinzaRehman/Ktodo-list.git
```

2. Enter the project folder:

```bash
cd Ktodo-list
```

3. Open the folder in Visual Studio Code:

```bash
code .
```

4. Open `index.html` in your browser or use the Live Server extension.

## What I Learned

While building this application, I practiced:

* Selecting HTML elements with `document.querySelector()`
* Creating new HTML elements with JavaScript
* Responding to form submissions and button clicks
* Preventing forms from refreshing the page
* Reading and changing element content
* Using checkboxes to track completed tasks
* Making editable task elements
* Updating counters based on application state
* Organizing HTML, CSS, JavaScript, and image files
* Deploying a static website with GitHub Pages

## Future Improvements

Features I may add in the future include:

* Saving tasks with `localStorage`
* Filtering by all, active, and completed tasks
* Adding task due dates
* Adding task categories
* Supporting drag-and-drop task ordering
* Improving keyboard accessibility
* Adding light and dark themes

## Credits

* Animated strawberry graphic sourced from [GIPHY](https://giphy.com/)
* Fonts provided by [Google Fonts](https://fonts.google.com/)
* Hosted with [GitHub Pages](https://pages.github.com/)

## Author

**Kinza Rehman**

Software engineer passionate about creating useful, accessible, and visually engaging digital experiences.

* [GitHub](https://github.com/KinzaRehman)
* [Live Project](https://kinzarehman.github.io/Ktodo-list/)
