import './App.css';
import { Navbar, Aside} from './components';
import ProductsScreen from './screen/ProductsScreen';
import { useState } from 'react';

function App() {

  const [mobileAside, setMobileAside]= useState(false);

  return (
   <div className='app flex-col'>
      <Navbar />
      {mobileAside && <Aside mobileAside={mobileAside} setMobileAside={setMobileAside}  />}
      <div className="section-down">
        <div className='aside-container'><Aside mobileAside={mobileAside}/></div>
        <ProductsScreen mobileAside={mobileAside} setMobileAside={setMobileAside} />
      </div>
   </div>
  );
}

export default App;
