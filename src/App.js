import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Top from "./components/top/Top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Top />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
