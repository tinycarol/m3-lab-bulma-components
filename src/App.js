import "./App.css";
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/formfield/FormField";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" />
      <FormField label="Email" />
    </div>
  );
}

export default App;
