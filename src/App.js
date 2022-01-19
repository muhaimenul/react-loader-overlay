import './App.css';
import { Loader } from "./lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
        <p>
          Welcome! <code>React Pre Loader with Overlay</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
