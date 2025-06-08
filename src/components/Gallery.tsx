import ContentCard from "./ContentCard";

const Gallery = () => {
  // Демо данные для галереи
  const galleryItems = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      title: "Идеальные формы",
      likes: 127,
      views: 456,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1594736797933-d0c62e9b2c14?w=400",
      title: "Соблазнительные изгибы",
      likes: 89,
      views: 342,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
      title: "Спортивная попка",
      likes: 156,
      views: 623,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      title: "Пляжная красота",
      likes: 93,
      views: 287,
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
      title: "Танцевальные движения",
      likes: 112,
      views: 398,
    },
    {
      id: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
      title: "Фитнес мотивация",
      likes: 78,
      views: 245,
    },
  ];

  return (
    <section className="py-16 bg-jopa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-jopa-dark mb-4">
            Популярные публикации
          </h2>
          <p className="text-lg font-open-sans text-gray-600">
            Самые популярные фото в нашей галерее
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <ContentCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              likes={item.likes}
              views={item.views}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-jopa-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-open-sans font-medium">
            Загрузить больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
