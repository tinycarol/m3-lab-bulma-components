import CoolButton from "../CoolButton/CoolButton"
import FormField from "../Formfield/Formfield"
import Message from "../Message/Message"
import Navbar from "../Navbar/Navbar"




function Signup(){

    return (
        <div>
         <Navbar/>
         <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
         <FormField label="Email" type="email" placeholder="e.g AlexSmith@email.com" />
         <CoolButton submit="submit" login="Login" signup="Signup"/>
         <Message/>
        </div>
    )

}

export default Signup