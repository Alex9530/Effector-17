import TodoList from "./components/TodoList";


function App() {
  return (
    <main>
      <div className="  bg-red-500 rounded-2xl text-center container my-10 mx-auto p-4  hover:text-lime-700">
        <h1 className="text-3xl font-black underline decoration-gray-500">Todo list</h1>
        <TodoList/>
      </div>
     
    </main>
  );
}

export default App;
