const Hero = () => {
    return (
        <div id="home" className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/75/Mileto%2C_Santa_Maria_Assunta_%2805%29_%28cropped%29.jpg")' // Il percorso dell'immagine è relativo alla directory di Hero.js
                }}
            >
                <div className="absolute inset-0 bg-black/40"/>
            </div>

            <div className="relative h-full flex items-center justify-center text-center">
                <div className="max-w-3xl px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Cattedrale di Mileto
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Ciao nella storica Cattedrale di Mileto, un simbolo di fede e storia della Calabria
                    </p>
                    <a
                        href="#orari"
                        className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors duration-200"
                    >
                        Orari delle Messe
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
