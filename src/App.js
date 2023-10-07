import "./App.css";
import Destinations from "./Components/Destinations";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Offers from "./Components/Offers";
import Booknow from "./Components/Booknow";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="container">
        <Reviews />
        <Destinations />
        <Offers />
        <Booknow />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
