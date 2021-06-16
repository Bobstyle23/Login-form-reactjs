import Login from "./Login";
import Register from "./Register";

let userRegistered = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {userRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
