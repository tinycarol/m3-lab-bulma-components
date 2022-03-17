import './App.css';
import Navbar from "../src/components/Navbar/Navbar"
import FormField from './components/Formfield/Formfield';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    </div>
  );
}

export default App;
