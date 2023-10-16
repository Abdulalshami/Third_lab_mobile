import React, { useState } from 'react';

function App() {
  // Part A: State Management
  const [tasks, setTasks] = useState([
    'Go to the gym',
    'Play sports outside',
    'Walk the dog'
    
  ]);

  // Part B: Passing Props
  return (
    <div>
      <h1>Task List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: 'none' }}>
          {task}
        </li>
      ))}
    </ul>
  );
}

export default App;
