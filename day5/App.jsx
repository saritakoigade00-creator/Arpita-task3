function App() {
  const tasks = ["Learn React", "Practice JSX", "Build Components"];

  return (
    <div>
      <h1>Day 5 - Lists & Conditional Rendering</h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {tasks.length > 0 && <p>Tasks are available.</p>}
    </div>
  );
}

export default App;