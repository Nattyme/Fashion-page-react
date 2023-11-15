import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Brands from "./components/brands/Brands.jsx";
import Arrivals from "./components/arrivals/Arrivals.jsx";
import Payday from "./components/payday/Payday.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Promo />
      <Brands />
      <Arrivals /> */}
      <Payday />
    </div>
  );
}

export default App;
