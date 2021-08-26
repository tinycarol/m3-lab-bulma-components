import "./App.css";
import 'bulma/css/bulma.css';
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/formfield/FormField";
import CoolButton from "./components/coolbutton/CoolButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" />
      <FormField label="Email" />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;
