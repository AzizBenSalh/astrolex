import { useState, useEffect } from 'react';
import { nasaApi } from '../../../services/nasaApi';
import ReactPlayer from 'react-player';

interface Video {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  date: string;
}

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [playing, setPlaying] = useState(false);

  const topics = [
    'Space exploration',
    'Mars rovers',
    'Solar system',
    'Black holes',
    'Galaxies',
    'Space telescopes'
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const results = await Promise.all(
          topics.map(topic => nasaApi.getVideos(topic))
        );

        const allVideos = results.flat()
          .map((item: any) => ({
            title: item.data[0].title,
            description: item.data[0].description,
            url: item.href,
            thumbnail: item.links?.[0]?.href || '',
            date: item.data[0].date_created
          }))
          .slice(0, 10); // Limit to 10 videos

        setVideos(allVideos);
        if (allVideos.length > 0) {
          setSelectedVideo(allVideos[0]);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setPlaying(true);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Space & Astronomy Videos</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch fascinating videos from NASA's archives, featuring space missions,
            astronomical phenomena, and scientific discoveries.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {selectedVideo && (
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="aspect-video">
                    <ReactPlayer
                      url={selectedVideo.url}
                      width="100%"
                      height="100%"
                      controls
                      playing={playing}
                      onPause={() => setPlaying(false)}
                      onPlay={() => setPlaying(true)}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-gray-400">
                      {selectedVideo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">More Videos</h3>
                <div className="space-y-4">
                  {videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => handleVideoSelect(video)}
                      className={`w-full text-left rounded-lg overflow-hidden transition-colors ${
                        selectedVideo === video ? 'ring-2 ring-purple-500' : ''
                      }`}
                    >
                      <div className="aspect-video relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <h4 className="text-sm font-medium text-white truncate">
                          {video.title}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}