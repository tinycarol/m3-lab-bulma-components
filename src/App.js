import './App.css';
import Message from './components/Message/Message';
import Navbar from './components/Navbar/Navbar.jsx';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Form-container">
        <Signup></Signup>
      </div>
      <Message className="Message-container" isInfo="is-info" title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
