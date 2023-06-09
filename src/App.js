import Register from "./components/Register";
import ipConfig from "./ipConfig.json";

export const config = {
  endpoint: `https://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
          <Register />
    </div>
  );
}

export default App;
