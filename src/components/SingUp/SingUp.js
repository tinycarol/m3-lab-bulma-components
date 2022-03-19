
import './SingUp.css';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField'
import CoolButton from '../CoolButton/CoolButton';

function SingUp() {
  return (
    <>
    <Navbar/>
      <div className='container'>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Enter your password" />

        <CoolButton isSmall isSuccess >Submit</CoolButton>

      </div>
    </>
  );
}

export default SingUp;
