interface ItemDetailsProps {
  name: string;
  image: string;
  description: string;
  details: string[];
}

export function ItemDetails({ name, image, description, details }: ItemDetailsProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-4">{name}</h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-black/50 p-4 rounded-lg text-white"
            >
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}