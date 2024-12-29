const news = [
  {
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "New Exoplanet Discovery",
    date: "March 15, 2024",
    description: "Scientists discover Earth-like planet in habitable zone of nearby star system."
  },
  {
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Mars Mission Update",
    date: "March 12, 2024",
    description: "Latest findings from the Perseverance rover reveal new insights about Mars' ancient history."
  },
  {
    image: "https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Solar Storm Alert",
    date: "March 10, 2024",
    description: "Massive solar flare headed towards Earth, aurora displays expected."
  }
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Space News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-purple-500/20 hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-purple-500 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                <button className="mt-4 text-purple-500 hover:text-purple-400 font-medium">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}