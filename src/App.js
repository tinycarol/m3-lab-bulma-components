import "./App.css";
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/formfield/FormField";

function App() {
  return (
    <>
      <h1>Bulma</h1>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </>
  );
}

export default App;
