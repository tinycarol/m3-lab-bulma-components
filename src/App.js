import './App.css';
import Nav  from './components/navbar/Navbar';
import Formfield from './components/formfield/FormField';
import Message   from './components/message/message';
import Card from './components/card/Card';
import mex  from "./data"


function App() {
  return (
    <div className='main container'>

      <Nav />
      {/* FORM */}
      <div className='formSection'>
        <Formfield title="Register"/>
        <Formfield title="Login"/>
      </div>

      {/* MESSAGES //! sin destructuring  */}
      <div className="messageSection"> 
        {mex.map((el,index) => {
          return (
            <div key={index} className="column is-one-quarter">
              <Message title={el.heading} text={el.content}/>
            </div>
          )
        })}
      </div>

      {/* CARDS // ! con destructuring */}
      <div className="cardSection">  
        {mex.map((el,index) => {
        return (
          <div key={index} className="column is-one-quarter">
            <Card {...el}/>
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default App;
