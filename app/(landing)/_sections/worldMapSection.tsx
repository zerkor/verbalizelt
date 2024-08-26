const WorldMapSection = () => {
  return (
    <section className="py-16 bg-[#f8f9fc] w-full text-center"> {/* Ajout de w-full pour étendre le fond */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Learn a new language the fun way
        </h2>
        <p className="text-gray-600 mb-8">
          Reach your language goals fast with the world’s #1 education app
        </p>
        <img src="/worldmap.png" alt="World Map" className="mx-auto mb-8" /> {/* Chemin ajusté pour l'image */}
        <div className="flex justify-around mx-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">4.5k+</h3>
            <p className="text-gray-600">Daily register from new users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">1.5k+</h3>
            <p className="text-gray-600">Language into the world</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Total learners in the world</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
