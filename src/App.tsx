import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        <span>Hello World!</span>
      </Alert>
      <Button color="primary" onClick={() => console.log('Clicked')}>Button</Button>
    </div>
  );
}

export default App;
