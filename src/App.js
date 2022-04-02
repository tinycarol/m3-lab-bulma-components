import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/formfield/FormField";
import CoolButton from "./components/button/CoolButton";
import Container from "./components/container/Container";
import Message from "./components/message/Message";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="*****" />

        <CoolButton isInfo isRounded>
          Button 1
        </CoolButton>
      </Container>
    </div>
  );
}

export default App;
