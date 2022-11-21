import { Partners } from '../../components/Partners';
import { ShopQuality } from '../../components/ShopQuality';
import BestSeller from '../BestSeller';
import './style.css';

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className='cover-image' />
      <ShopQuality />
      <BestSeller />
      <Partners />
    </div>
  );
}

export default HomePage;
