import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Services2 from "./components/Services2";
import Studio from "./components/Studio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <Aboutus />
      <Services2 />
      <Studio />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
