const BASE_URL = 'https://en.wikipedia.org/w/api.php';

export const wikiApi = {
  async getArticle(title: string) {
    try {
      // Get the main content and page images
      const contentResponse = await fetch(
        `${BASE_URL}?action=query&format=json&origin=*&prop=extracts|pageimages&explaintext=1&exintro=1&pithumbsize=1024&titles=${encodeURIComponent(title)}`
      );
      const contentData = await contentResponse.json();
      const page = Object.values(contentData.query.pages)[0] as any;

      // Get the image URL from the pageimages property
      const imageUrl = page.thumbnail?.source || await getTopicImage(title);

      return {
        title: page.title || title,
        content: page.extract || '',
        summary: page.extract || '',
        image: imageUrl,
        references: []
      };
    } catch (error) {
      console.error('Error fetching Wikipedia article:', error);
      throw error;
    }
  },

  async search(query: string) {
    try {
      const response = await fetch(
        `${BASE_URL}?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      return data.query.search;
    } catch (error) {
      console.error('Error searching Wikipedia:', error);
      throw error;
    }
  }
};

// Helper function to get a relevant image for the topic
async function getTopicImage(topic: string) {
  const fallbackImages = {
    'Astronomy': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
    'Astrophysics': 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80',
    'Space exploration': 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80'
  };

  // Try to get a relevant image from Wikipedia Commons
  try {
    const response = await fetch(
      `${BASE_URL}?action=query&format=json&origin=*&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(topic)}+space&gsrlimit=1&piprop=original&pilimit=1`
    );
    const data = await response.json();
    const pages = data.query?.pages || {};
    const firstPage = Object.values(pages)[0] as any;
    
    if (firstPage?.original?.source) {
      return firstPage.original.source;
    }
  } catch (error) {
    console.error('Error fetching topic image:', error);
  }

  // Return a fallback image or a default space image
  return fallbackImages[topic as keyof typeof fallbackImages] ||
    'https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80';
}