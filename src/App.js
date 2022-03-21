import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SignUP from './Components/SignUp/SignUP';
import Message from './Components/Message/Message';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <SignUP />
      <div id="messages-div" className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <div className="container mt-6 columns">
          <div className="column">
            <Message color="is-primary" title="First Message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate fringilla ligula, vitae tincidunt sem porttitor eu.
            </Message>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
