# Simple Product Dashboard

A small React app built with Vite. It shows a static product list that can be toggled with a button and greets the user by the name typed into an input.

## File Organization

```text
web-programming-5/
├── src/
│   ├── components/
│   │   ├── Card.jsx          -> a box with border, padding and margin, shows its children
│   │   ├── Product.jsx       -> shows one product (title and price) inside a Card
│   │   └── ProductList.jsx   -> has the product array and draws them with map()
│   ├── App.jsx               -> main component, has the state, button and input
│   └── main.jsx              -> starts the app and puts App into the page
├── index.html                -> the page with the root div
└── package.json              -> project info and dependencies (React, Vite)
```

Styling is done with inline styles, so there is no separate CSS file.

## Challenges I Faced

- Understanding why a controlled input needs both `value` and `onChange`.
- Showing and hiding the list with conditional rendering instead of touching the DOM.
- Using a stable `id` as the key instead of the array index.
- Deciding which component should hold state and which should only use props.
- Committing each step separately so the progress is visible in Git.
