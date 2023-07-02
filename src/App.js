import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop";
import { Blog } from './pages/blog';
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop_context";
import { Home } from './pages/home';
import { About } from './pages/about';

import products from './products';


function App() {

  return (
    <div className="w-full flex justify-start flex-1">
      <ShopContextProvider>
        <Router>
          <div><Navbar /></div>
          <div className='flex-grow bg-gray-900 text-white'>
            <Routes>
              <Route path="/palaungminthar" element={<Home />} />
              <Route path="/palaungminthar/shop" element={<Shop data={products} />} />
              <Route path="/palaungminthar/blog" element={<Blog />} />
              <Route path="/palaungminthar/contact" element={<Contact />} />
              <Route path="/palaungminthar/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
