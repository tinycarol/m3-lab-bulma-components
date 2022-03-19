import './SingUp.css';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField'
import CoolButton from '../CoolButton/CoolButton';
import Message from '../Message/Message';

function SingUp() {
  return (
    <>
    <Navbar/>
      <div className='container'>
        <div className='form'>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Enter your password" />

            <CoolButton isSmall isSuccess >Submit</CoolButton>
        </div>
      </div>
      <Message/>
    </>
  );
}

export default SingUp;
