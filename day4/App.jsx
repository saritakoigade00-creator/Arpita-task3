import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      <h1>Day 4 - Event Handling & Forms</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;