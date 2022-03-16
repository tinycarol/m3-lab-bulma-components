import './App.css';
import Navbar from './components/Navbar/Navbar';
import FormField from './components/FormField/FormField';

function App() {
  return (
    <Navbar />
    <FormField label={label} type={type} placeholder={placeholder} />
    <FormField label={label} type={type} placeholder={placeholder} />
  );
}

export default App;
