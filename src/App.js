// App.js
import React, { useState } from "react";

// -----------------------------
// 1. Functional Component Example
// -----------------------------
function Greeting(props) {
  // Props: receiving data from parent
  return <h2>Hello, {props.name} 👋</h2>;
}

// -----------------------------
// 2. Class Component Example
// -----------------------------
class ClassCounter extends React.Component {
  // State inside a Class Component
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Event handler in Class
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Class Counter: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

// -----------------------------
// 3. Functional Component with State + Events
// -----------------------------
function FunctionalCounter() {
  // useState Hook for local state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Functional Counter: {count}</p>
      {/* Event Handling */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// -----------------------------
// 4. Forms Handling (Controlled Component)
// -----------------------------
function ControlledForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + input);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled Component: value tied to state */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// -----------------------------
// 5. Uncontrolled Component
// -----------------------------
function UncontrolledForm() {
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted (Uncontrolled): " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Uncontrolled: value not tied to state */}
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

// -----------------------------
// 6. Conditional Rendering
// -----------------------------
function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h3>Welcome back! 🎉</h3>
      ) : (
        <h3>Please login to continue 🔑</h3>
      )}
    </div>
  );
}

// -----------------------------
// 7. Lists & Keys
// -----------------------------
function TodoList() {
  const todos = ["Learn React", "Practice JS", "Build Projects"];
  return (
    <ul>
      {todos.map((todo, index) => (
        // Always provide unique keys
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// -----------------------------
// 8. Composition vs Inheritance
// -----------------------------
// ✅ Composition: passing components as children
function Card({ children }) {
  return <div style={{ border: "1px solid gray", padding: "10px" }}>{children}</div>;
}

// -----------------------------
// 9. Rendering Techniques
// -----------------------------
function RenderingExamples() {
  const showMessage = true;

  return (
    <div>
      {/* Inline rendering */}
      <p>{showMessage ? "Message is visible ✅" : "Hidden ❌"}</p>

      {/* Render null */}
      {false && <p>You will not see this text.</p>}

      {/* Multiple children */}
      <>
        <h4>Child 1</h4>
        <h4>Child 2</h4>
      </>
    </div>
  );
}

// -----------------------------
// MAIN APP COMPONENT
// -----------------------------
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🟢 React Fundamentals Demo</h1>

      {/* JSX + Components + Props */}
      <Greeting name="Syed" />

      {/* Functional Component with State + Events */}
      <FunctionalCounter />

      {/* Class Component with State + Events */}
      <ClassCounter />

      {/* Forms: Controlled & Uncontrolled */}
      <h3>Controlled Form</h3>
      <ControlledForm />
      <h3>Uncontrolled Form</h3>
      <UncontrolledForm />

      {/* Conditional Rendering */}
      <ConditionalRendering isLoggedIn={true} />
      <ConditionalRendering isLoggedIn={false} />

      {/* Lists & Keys */}
      <h3>Todo List:</h3>
      <TodoList />

      {/* Composition Example */}
      <Card>
        <p>This is inside a Card component (Composition pattern).</p>
      </Card>

      {/* Rendering Techniques */}
      <h3>Rendering Examples:</h3>
      <RenderingExamples />
    </div>
  );
}

export default App;
