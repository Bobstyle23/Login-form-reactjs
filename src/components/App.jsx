import Login from "./Login";
import Register from "./Register";

let userRegistered = false;

function App() {
  return (
    <div className="container">{userRegistered ? <Login /> : <Register />}</div>
  );
}

export default App;
