interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export function NewsCard({ image, title, date, description }: NewsCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-purple-500/20 hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-purple-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <button className="mt-4 text-purple-500 hover:text-purple-400 font-medium">
          Read more →
        </button>
      </div>
    </div>
  );
}