import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import SwiperSlides from './Pages/SwiperSlides';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="swiper-slides" element={<SwiperSlides />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
