const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-jopa-blue to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-fade-in">
          Добро пожаловать на Jopa.ru
        </h1>
        <p className="text-xl md:text-2xl font-open-sans mb-8 opacity-90 animate-fade-in">
          Современная галерея для просмотра и публикации контента
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <button className="bg-white text-jopa-blue px-8 py-3 rounded-lg font-open-sans font-semibold hover:bg-gray-100 transition-colors">
            Смотреть галерею
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-open-sans font-semibold hover:bg-white hover:text-jopa-blue transition-colors">
            Загрузить фото
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
