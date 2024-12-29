interface TechnologyDetailsProps {
  item: {
    name: string;
    image: string;
    description: string;
    specs: string[];
  };
}

export function TechnologyDetails({ item }: TechnologyDetailsProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="relative h-96">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>
      
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-4">{item.name}</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">{item.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {item.specs.map((spec, index) => (
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