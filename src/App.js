import './App.css';
import Navbar from './components/Navbar/Navbar';
import FormField from './components/FormField/FormField'

function App() {
  return (
    <>
    <Navbar/>
    <div className='wrapper'>
      <div className='forms'>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </div>

    </>
  );
}

export default App;
