import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const items = ["first", "second", "third", "fourth"];
  return (
    <>
      <div>
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <p>This is an alert!</p>
          </Alert>
        )}
        <Button onClick={() => setAlertVisibility(true)}>
          <p>Click Me!</p>
        </Button>
      </div>
      <ListGroup items={items} heading="Place" onSelectItem={()=>{}}></ListGroup>
      <Like onClick={() => {}}></Like>
    </>
  );
}
export default App;
