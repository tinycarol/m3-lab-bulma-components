import './App.css';
import Navbar from './components/navbar/navbar/Navbar'
import FormField from './components/navbar/formfield/FormField';


function App() {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
    </div>
  );
}

export default App;
