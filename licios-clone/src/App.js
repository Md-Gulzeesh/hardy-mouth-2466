import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from './Components/NavbarSection';
import CarouselSection from './Components/CarouselSection';
import ShopByCategory from './Components/ShopByCategory';
import LiciousMetaBanner from './Components/LiciousMetaBanner';
import KnowTheLiciousWay from './Components/KnowTheLiciousWay';

function App() {
  return (
    <div style={{backgroundColor:"#f7f6f6"}}>
      <NavbarSection/>
      <CarouselSection/>
      <ShopByCategory/>
      <LiciousMetaBanner/>
      <KnowTheLiciousWay/>
    </div>
  );
}

export default App;
