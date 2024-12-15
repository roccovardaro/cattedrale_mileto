import { Clock } from 'lucide-react';

const OrariMesse = () => {
  const orari = [
    { giorno: 'Domenica', orari: ['08:30', '11:00', '18:00'] },
    { giorno: 'Lunedì', orari: ['18:00'] },
    { giorno: 'Martedì', orari: ['18:00'] },
    { giorno: 'Mercoledì', orari: ['18:00'] },
    { giorno: 'Giovedì', orari: ['18:00'] },
    { giorno: 'Venerdì', orari: ['18:00'] },
    { giorno: 'Sabato', orari: ['18:00'] },
  ];

  return (
    <section id="orari" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Clock className="w-12 h-12 text-amber-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Orari delle Messe</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orari.map((item) => (
            <div
              key={item.giorno}
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.giorno}</h3>
              <div className="space-y-2">
                {item.orari.map((ora) => (
                  <p key={ora} className="text-gray-700">
                    {ora}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrariMesse;