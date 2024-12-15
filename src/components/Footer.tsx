import { Church } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-semibold text-white">Cattedrale di Mileto</span>
            </div>
            <p className="text-gray-400">
              Un luogo di preghiera, storia e comunità nel cuore della Calabria.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Collegamenti Rapidi</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-500 transition-colors duration-200">Home</a></li>
              <li><a href="#storia" className="hover:text-amber-500 transition-colors duration-200">Storia</a></li>
              <li><a href="#orari" className="hover:text-amber-500 transition-colors duration-200">Orari Messe</a></li>
              <li><a href="#eventi" className="hover:text-amber-500 transition-colors duration-200">Eventi</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Orari di Apertura</h3>
            <p className="text-gray-400">
              Lunedì - Sabato: 07:30 - 12:00, 16:00 - 19:00<br />
              Domenica: 07:30 - 12:30, 16:00 - 19:30
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Cattedrale di Mileto. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;