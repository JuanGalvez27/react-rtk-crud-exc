import './App.css';
import TasksList from './app/components/TasksList';
import TaskForm from './app/components/TaskForm';

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
