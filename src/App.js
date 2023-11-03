import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';
import TodoList from './components/TodoList';



function App() {
  
  return (
    <div className="App">
      <Counter/>
      <Todo/>
      <TodoList/>
    </div>
  );
}

export default App;
