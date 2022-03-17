import './App.scss';
import Navbar from './components/navbar/Navbar';
import FormField from './components/formfield/FormField.js';
import CoolButton from './components/button/CoolButton';

function App() {
  return (
    <div>
      <Navbar />

      <div className='form'>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>    
    </div>
    
  );
}

export default App;
