import { MapPin, Phone, Mail } from 'lucide-react';

const Contatti = () => {
  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Contatti
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Indirizzo</h3>
                <p className="text-gray-600">Piazza Cattedrale, 89852 Mileto VV</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
                <p className="text-gray-600">+39 0963 338464</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">info@cattedraledimileto.it</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-800 transition-colors duration-200"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contatti;