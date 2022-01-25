
import './App.css';
import { Form } from "./components/Form";
import { Navbar } from "./organisms/Navbar";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
        <Navbar linkHome="home" linkAdd="add" />
        <Register />
        <Form register="register"/>
    </div>
  );
}

export default App;
