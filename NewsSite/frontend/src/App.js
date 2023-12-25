import "./App.css";
import Navigation from "./components/Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function App() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
