import "./App.scss";
import "./Base.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Services />
    </>
  );
}

export default App;
