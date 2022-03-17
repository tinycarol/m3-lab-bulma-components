import './App.css';
import Navbar from './components/misc/Navbar/Navbar';
import FormField from './components/misc/FormField/FormField';
import CoolButton from './components/misc/CoolButton/CoolButton';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      </div>
      <div>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <div>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      </div>
      <div>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    </div>
  );
}

export default App;
