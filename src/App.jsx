
import './App.css';
import { Form } from "./components/Form";
import { Navbar } from "./organisms/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar linkHome="home" linkAdd="add" />
        <Form register="register"/>
    </div>
  );
}

export default App;
