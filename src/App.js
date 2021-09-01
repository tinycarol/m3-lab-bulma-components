import './App.css';
import Navbar from "./components/navbar/Navbar"
import FormField from './components/formfield/FormField';
import CoolButton from './components/coolButton/CoolButton';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <Signup/>
    </div>
  );
}

export default App;
