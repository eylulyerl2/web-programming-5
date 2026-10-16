import { useState } from "react";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>
    </div>
  );
}

export default App;