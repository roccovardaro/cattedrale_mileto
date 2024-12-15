const Storia = () => {
  return (
      <section id="storia" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            La Nostra Storia
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Mileto%2C_Santa_Maria_Assunta_%2805%29_%28cropped%29.jpg"
                  alt="Cattedrale storica"
                  className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                La cattedrale di Santa Maria Assunta è il principale luogo di culto della città di Mileto, in Calabria, e cattedrale della diocesi di Mileto-Nicotera-Tropea.
              </p>
              <p className="text-gray-700">
                L'antica cattedrale di Mileto, nella quale si fondevano l'architettura normanna con la cultura bizantina e musulmana, andò distrutta nel terremoto del 1783 che rase al suolo l'intera Mileto.
              </p>
              <p className="text-gray-700">
                La costruzione di una nuova cattedrale si protrasse per oltre 30 anni. L'edificio fu inaugurato dal vescovo Enrico Capece Minutolo il 6 novembre del 1823. La chiesa era a croce latina, con cupola, era arricchita di marmi pregiati di gusto barocco e raccoglieva le opere più importanti provenienti dall'antica cattedrale. I successivi terremoti del 1905 e del 1908 distrussero anche l'edificio ottocentesco.
              </p>
              <p className="text-gray-700">
                La nuova ed attuale chiesa è stata edificata sulle spoglie del precedente edificio, su progetto dell'architetto Faustino Roncoroni ed è stata consacrata dal vescovo Paolo Albera il 25 ottobre 1930.
              </p>
              <p className="text-gray-700">
                Nel 2016 è stata elevata al rango di basilica minore.
              </p>
              <p className="text-gray-700">
                La chiesa è in stile romanico, con tre porte d'ingresso in bronzo rappresentanti la natività (porta centrale), la crocifissione e la resurrezione (porte laterali) di Gesù Cristo. L'interno è a croce latina, con tre navate divise da due ordini di sei colonne. La navata centrale presenta un soffitto ligneo a cassettoni con al centro del presbiterio la tela dell'Assunzione della Vergine in Cielo attribuita al pittore Giuseppe Naso. Nella navata sinistra si trova la Cappella del Santissimo Sacramento, affrescata dall'artista calabrese Grillo, con al centro un altare di marmo a tarsie policrome e il Sacro Cuore con una corona di angeli. Nella navata destra domina una statua marmorea del 1549 con l'effigie di San Nicola di Bari, patrono di Mileto.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Storia;
