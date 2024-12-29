import { useState, useEffect } from 'react';
import { nasaApi } from '../services/nasaApi';

export function useNasaData(type: 'apod' | 'mars' | 'search', query?: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let result;
        
        switch (type) {
          case 'apod':
            result = await nasaApi.getAPOD(5);
            break;
          case 'mars':
            result = await nasaApi.getMarsPhotos();
            break;
          case 'search':
            if (!query) throw new Error('Search query required');
            result = await nasaApi.searchImages(query);
            break;
        }
        
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, query]);

  return { data, loading, error };
}