import Signup from './components/Signup/Signup';
import Message from './components/Message/Message';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Signup />
      </div>
      <div id="messages-div" className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <div className="container mt-6 columns">
          <div className="column is-6">
            <Message color="is-primary" title="First Message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate fringilla ligula, vitae tincidunt sem porttitor eu.
            </Message>
          </div>
          <div className="column is-6">
            <Message color="is-warning" title="Second Message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate fringilla ligula, vitae tincidunt sem porttitor eu.
            </Message>
          </div>
        </div>
        <div className="container columns mb-6">
          <div className="column is-6">
            <Message color="is-danger" title="Third Message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate fringilla ligula, vitae tincidunt sem porttitor eu.
            </Message>
          </div>
          <div className="column is-6">
            <Message color="is-info" title="Fourth Message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate fringilla ligula, vitae tincidunt sem porttitor eu.
            </Message>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
