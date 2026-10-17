# Simple Product Dashboard

A small React app built with Vite. It shows a static product list that can be toggled with a button and greets the user by the name typed into an input.

## File Organization

```text
assignment5/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Product.jsx
│   │   └── ProductList.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

- **main.jsx** – Entry point, renders `App` into `#root`.
- **App.jsx** – Root component. Holds `showProducts` and `name` state, renders the button, the controlled input, the greeting, and `ProductList` only when `showProducts` is true.
- **ProductList.jsx** – Defines the static product array and renders a `Product` for each item with `.map()`, using `id` as the key.
- **Product.jsx** – Stateless component that shows `title` and `price` from props inside a `Card`.
- **Card.jsx** – Layout wrapper that renders its `children` with border, padding and margin.

Styling is done with inline styles.

## Challenges I Faced

- Understanding why a controlled input needs both `value` and `onChange`.
- Showing and hiding the list with conditional rendering instead of touching the DOM.
- Using a stable `id` as the key instead of the array index.
- Deciding which component should hold state and which should only use props.
- Committing each step separately so the progress is visible in Git.
