import Home from "./pages/home";
import "./app.scss";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
