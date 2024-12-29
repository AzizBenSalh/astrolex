import { NewsCard } from './NewsCard';

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
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}