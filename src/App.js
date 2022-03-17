import Navbar from './components/Navbar/Navbar.js';
import FormField from './components/FormField/FormField.js';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <div className="mt-6">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </>
  );
}

export default App;
