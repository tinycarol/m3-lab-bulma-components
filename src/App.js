import './App.css';
import Message from './components/message/Message';
import Navbar from './components/nav/Navbar';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
