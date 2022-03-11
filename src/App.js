import './App.css';
import BrandCard from './components/BrandCard';
import FeaturedProduct from './components/FeaturedProduct';
import Footer from './components/Footer';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';
import TrendingProduct from './components/TrendingProduct';
import WhyChoose from './components/WhyChoose';

function App() {
  return (
    <div>
      <Info />
      <Navbar />
      <Slogan />
      <FeaturedProduct />
      <TrendingProduct />
      <WhyChoose />
      <BrandCard />
      <Footer />
    </div>
  );
}

export default App;
