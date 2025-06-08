import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-jopa-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-montserrat font-bold mb-4">Jopa.ru</h3>
            <p className="font-open-sans text-gray-300 mb-4">
              Современная платформа для публикации и просмотра контента.
              Присоединяйтесь к нашему сообществу и делитесь лучшими моментами.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Icon name="Twitter" size={20} />
              </button>
              <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Icon name="Facebook" size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 font-open-sans text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Популярное
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новое
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 font-open-sans text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Приватность
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-open-sans text-gray-300">
            © 2024 Jopa.ru. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
