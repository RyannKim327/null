import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const AsyncDataFetcher: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Simulate connecting via an async task (e.g., fetching data)
  const connectAsync = async () => {
    try {
      // Just an example URL, replace with your Android server endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) throw new Error('Network response was not ok');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    connectAsync();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Data fetched:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default AsyncDataFetcher;
