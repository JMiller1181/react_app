import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>
        <p>This is an alert!</p>
      </Alert>}
      <Button onClick={() => setAlertVisibility(true)}><p>Click Me!</p></Button>
    </div>
  );
}
export default App;
