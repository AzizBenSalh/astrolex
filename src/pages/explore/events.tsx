import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, Loader } from 'lucide-react';
import { format } from 'date-fns';

interface SpaceEvent {
  title: string;
  date: string;
  description: string;
  image?: string;
}

export default function Events() {
  const [events, setEvents] = useState<SpaceEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5`
        );
        const formattedEvents = response.data.map((event: any) => ({
          title: event.title,
          date: event.date,
          description: event.explanation,
          image: event.url
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Space Events</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest astronomical events, space missions, and celestial phenomena. 
            Discover what's happening in the cosmos and never miss an important space event.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-8 w-8 text-purple-500 animate-spin" />
          </div>
        ) : (
          <div className="grid gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow"
              >
                <div className="md:flex">
                  {event.image && (
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:h-full md:w-48 object-cover"
                        src={event.image}
                        alt={event.title}
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center text-sm text-purple-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {format(new Date(event.date), 'MMMM d, yyyy')}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{event.title}</h2>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}