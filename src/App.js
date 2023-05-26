import "./App.css";
import TodoApp from "./components/todoApp/TodoApp";
import StudentsList from "./components/studentsList/StudentsList";
import CarsList from "./components/carsList/CarsList";

function App() {
  return (
    <>
      {/* <TodoApp /> */}
      <h1 className="main-sign">Students</h1>
      <StudentsList />
      <h1 className="main-sign">Cars</h1>
      <CarsList />
    </>
  );
}

export default App;
