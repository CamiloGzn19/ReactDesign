import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Quotes from "../components/Quotes";
import Access from "../components/Access";
import Footer from "../components/Footer";
import "../Styles/style.css";

function App() {
  return (
    <div id="background">
      <Navbar />
      <Presentation />
      <Features />
      <Banner />
      <Quotes />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
