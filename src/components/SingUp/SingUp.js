import CoolButton from "../CoolButton/CoolButton"
import FormField from "../FormField/FormField"
import Navbar from "../Navbar/Navbar"
import Message from '../Message/Message';

const SingUp = ({children}) => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="type password between 4 and 8 chars" />
      <CoolButton />
      <Message />
    </div>
  )
}

export default SingUp;
