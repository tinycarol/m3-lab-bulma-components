import './App.css';
import Navbar from "./components/navbar/Navbar"
import FormField from "./components/formfield/FormField"

function App() {
  return (
    <div>
      <Navbar />
      <div id="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </div>
  );
}

export default App;
