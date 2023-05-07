import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import NuevoClick from './components/Estado';



const defaultTodos = [
{text:"Trabjar", completed:false},
{text:"Dormir", completed:true},
{text:"Estudiar3", completed:false},
{text:"Realizar tareas", completed:false},
{text:"banarse", completed:false}
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25}/>
      <TodoCounter completed={8} total={12}/>
      <TodoCounter completed={3} total={5}/>
      {/* <TodoForm/> */}
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        )) }
      
      </TodoList>


      <CreateTodoButton/>
    

          <NuevoClick/>
    </div>
  );
}



export default App;
