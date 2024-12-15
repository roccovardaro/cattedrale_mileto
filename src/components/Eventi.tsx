
import { Calendar } from 'lucide-react';

const Eventi = () => {
  const eventi = [
    {
      titolo: 'Festa Patronale',
      data: '15 Agosto',
      descrizione: 'Celebrazione solenne dell\'Assunta con processione per le vie della città',
    },
    {
      titolo: 'Concerto di Musica Sacra',
      data: 'Ogni prima domenica del mese',
      descrizione: 'Esibizione del coro della cattedrale con musiche tradizionali',
    },
    {
      titolo: 'Catechesi per Adulti',
      data: 'Ogni mercoledì',
      descrizione: 'Incontri di approfondimento sulla fede e la spiritualità',
    },
  ];

  return (
    <section id="eventi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-amber-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Eventi e Celebrazioni</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventi.map((evento) => (
            <div
              key={evento.titolo}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {evento.titolo}
                </h3>
                <p className="text-amber-700 font-medium mb-4">{evento.data}</p>
                <p className="text-gray-600">{evento.descrizione}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventi;