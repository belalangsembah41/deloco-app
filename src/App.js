import "./App.css";
import Collection from "./components/Collection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Collection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
