import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import FormField from './components/formfield/Formfield';
import CoolButton from './components/CoolButton/CoolButton'

function App() {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <div className='field mt-5'>
        <CoolButton isSmall isDanger className="is-rounded my-class mr-3">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>

    </>
  );
}

export default App;
