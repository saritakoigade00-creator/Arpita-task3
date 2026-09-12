function Welcome({ name }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>This is Day 2: Components and Props.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Day 2 - Components & Props</h1>
      <Welcome name="Arpita" />
    </div>
  );
}

export default App;