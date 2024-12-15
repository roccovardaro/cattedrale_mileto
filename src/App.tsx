
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Storia from './components/Storia';
import OrariMesse from './components/OrariMesse';
import Eventi from './components/Eventi';
import Galleria from './components/Galleria';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Storia />
      <OrariMesse />
      <Eventi />
      <Galleria />
      <Contatti />
      <Footer />
    </div>
  );
}

export default App;