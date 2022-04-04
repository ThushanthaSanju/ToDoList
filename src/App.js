import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <h1>Aputure</h1>
      <br></br>
      <br></br>
      <br></br>
      <h4> All Tasks</h4>
      <TodoList />
    </div>
  );
}

export default App;
