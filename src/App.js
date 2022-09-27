import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksList from './app/components/TasksList';
import TaskForm from './app/components/TaskForm';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList />} />
          <Route path='/create-task' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
