

const Galleria = () => {
  const immagini = [
    {
      url: 'https://images.unsplash.com/photo-1548612325-a0d09972c545?auto=format&fit=crop&q=80',
      descrizione: 'Facciata della Cattedrale',
    },
    {
      url: 'https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&q=80',
      descrizione: 'Interno della Cattedrale',
    },
    {
      url: 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&fit=crop&q=80',
      descrizione: 'Altare Maggiore',
    },
    {
      url: 'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?auto=format&fit=crop&q=80',
      descrizione: 'Affreschi',
    },
  ];

  return (
    <section id="galleria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Galleria Fotografica
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {immagini.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img.url}
                alt={img.descrizione}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-4">
                  {img.descrizione}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galleria;