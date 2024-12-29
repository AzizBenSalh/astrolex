interface TechDetailsProps {
  name: string;
  image: string;
  description: string;
  specs: string[];
}

export function TechDetails({ name, image, description, specs }: TechDetailsProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {name}
        </h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-black/50 p-4 rounded-lg text-white"
            >
              {spec}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}