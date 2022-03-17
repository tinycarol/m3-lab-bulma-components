import './App.css';
import Navbar from './components/navbar/Navbar';
import FormField from './components/formfield/FormField';
import CoolButton from './components/coolbutton/CoolButton'

function App() {
  return (
    <><><div>
      <Navbar />
    </div><div>
        <FormField />
      </div></><div className="field is-grouped">
        <CoolButton isSmall isDanger className="is-rounded my-class" type="danger">Login</CoolButton>
        <CoolButton isSmall isSuccess type="success">Signup</CoolButton>
      </div></>


   
  );
}

export default App;
