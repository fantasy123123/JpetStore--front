import './App.css';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import "@arco-design/web-react/dist/css/arco.css";
function App() {
  return <div className="App">{useRoutes(routes)}</div>
}

export default App;
