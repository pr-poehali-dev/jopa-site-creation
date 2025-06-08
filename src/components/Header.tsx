import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-jopa-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-montserrat font-bold text-jopa-dark">
              Jopa.ru
            </h1>
            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
              18+
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-jopa-dark hover:text-jopa-blue transition-colors font-open-sans"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-jopa-dark hover:text-jopa-blue transition-colors font-open-sans"
            >
              Галерея
            </a>
            <a
              href="#"
              className="text-jopa-dark hover:text-jopa-blue transition-colors font-open-sans"
            >
              Популярное
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-jopa-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-open-sans font-medium">
              Добавить фото
            </button>
            <button className="p-2 text-jopa-dark hover:text-jopa-blue transition-colors">
              <Icon name="Search" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
