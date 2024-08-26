import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-16 bg-[#f8f9fc] w-full"> {/* Ajout de w-full pour étendre le fond */}
      <div className="container mx-auto px-6 bg-[#f8f9fc]"> {/* Couleur de fond étendue au conteneur */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Why you'll love learning with Verbalizelt
          </h2>
          <p className="text-gray-600 max-w-md">
            Reach your goals your way with features designed for the fastest, most fun way to learn a language.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Premier cadre jaune avec image à gauche */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex items-center">
            <div className="w-1/3">
              <Image
                src="/imagegauche.png"
                alt="Progress Image"
                width={300}  // Ajusté pour mieux occuper l'espace
                height={300}
                className="rounded"
              />
            </div>
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make progress Quickly</h3>
              <p className="text-gray-700">
                Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
              </p>
            </div>
          </div>
          {/* Deuxième cadre jaune avec image à droite */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex items-center">
            <div className="w-2/3 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-700">
                Research shows our courses effectively and efficiently teach reading, listening, and speaking skills.
              </p>
            </div>
            <div className="w-1/3">
              <Image
                src="/imagedroite.png"
                alt="Learning Image"
                width={300}  // Ajusté pour mieux occuper l'espace
                height={300}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
