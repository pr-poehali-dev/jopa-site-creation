import Icon from "@/components/ui/icon";

interface ContentCardProps {
  imageUrl: string;
  title: string;
  likes: number;
  views: number;
}

const ContentCard = ({ imageUrl, title, likes, views }: ContentCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <button className="absolute top-3 right-3 bg-white bg-opacity-80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Icon name="Heart" size={20} className="text-red-500" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-montserrat font-semibold text-jopa-dark mb-2 truncate">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Icon name="Heart" size={16} />
            <span className="font-open-sans">{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Eye" size={16} />
            <span className="font-open-sans">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
