import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Brands from "./components/brands/Brands.jsx";
import Arrivals from "./components/arrivals/Arrivals.jsx";
import Payday from "./components/payday/Payday.jsx";
import Favourite from "./components/favourite/Favourite.jsx";
import DownloadApp from "./components/downloadApp/DownloadApp.jsx";
import Cta from "./components/cta/Cta.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals /> 
      <Payday />
      <Favourite />
      <DownloadApp />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
