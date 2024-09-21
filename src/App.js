import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
