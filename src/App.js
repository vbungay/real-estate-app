import Featured from "./components/featured/Featured";
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
    </div>
  );
}

export default App;
