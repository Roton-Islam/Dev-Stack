#Live Server

https://vercel.com/roton-projects/dev-stack1

# Dev Stack

Dev Stack is a responsive technology exploration website where users
can explore modern development technologies and build their own
custom technology stack.

## Technologies Used

- React.js
- JavaScript ES6+
- Tailwind CSS
- React Toastify
- JSON
- Vite

## Features

- Explore modern development technologies
- Add and remove technologies from your personal stack
- Responsive design for mobile, tablet, and desktop

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside
JavaScript. React uses JSX to describe what the user interface
should look like.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it?

useState lets a React component store and update data.

I used useState for the technology list, loading state, and selected
technology stack.

### 4. What does the useEffect hook do, and why did you need it?

useEffect runs side effects in a React component.

I used useEffect to fetch the technology data from the local JSON
file when the application loads.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React
update the correct item efficiently when the list changes.

### 6. What is conditional rendering?

Conditional rendering means showing different UI depending on a
condition.

For example, I show an empty stack message when the selected stack
has no technologies.

### 7. How do you pass data from parent to child?

A parent sends data to a child through props.

A child can send information back by calling a function that the
parent passes through props.
