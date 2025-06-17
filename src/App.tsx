import { useState } from "react";
import Alert from "./components/Alert"
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}><strong>Alert! </strong>Hello World!</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>Alert Button</Button>
    </div>
  );
}

export default App;
