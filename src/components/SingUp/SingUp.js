import CoolButton from "../CoolButton/CoolButton"
import FromField from "../FormField/FormField"
import Navbar from "../Navbar/Navbar"

const SingUp = () => {
  const name = {
    title: "Name",
    example: "e.g. Alex Smith"
  }
  const email = {
    title: "Email",
    example: "e.g. alexsmith@gmail.com"
  }
  const password = {
    title: "Password",
    example: "type your password"
  }
  
  return (
    <div>
      <Navbar/>
      <FromField />
      <CoolButton>Submit</CoolButton>
    </div>
  )
}

export default SingUp;
