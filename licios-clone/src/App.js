import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from './Components/NavbarSection';
import CarouselSection from './Components/CarouselSection';
import ShopByCategory from './Components/ShopByCategory';
import LiciousMetaBanner from './Components/LiciousMetaBanner';
import KnowTheLiciousWay from './Components/KnowTheLiciousWay';
import BestSellerSection from './Components/BestSellerSection';
import BonelessCutSection from './Components/BonelessCutSection';
import MyRewardBanner from './Components/MyRewardBanner';
import ExploreByCategorySection from './Components/ExploreByCategorySection';
import BreakfastSection from './Components/BreakfastSection';
import BlogSection from './Components/BlogSection';
import ReviewSection from './Components/ReviewSection';
import NewsSection from './Components/NewsSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{backgroundColor:"#f7f6f6"}}>
      <NavbarSection/>
      <CarouselSection/>
      <ShopByCategory/>
      <LiciousMetaBanner/>
      <KnowTheLiciousWay/>
      <BestSellerSection/>
      <BonelessCutSection/>
      <MyRewardBanner/>
      <ExploreByCategorySection/>
      <BreakfastSection/>
      <BlogSection/>
      <ReviewSection/>
      <NewsSection/>
      <Footer/>
    </div>
  );
}

export default App;
