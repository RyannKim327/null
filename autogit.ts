import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const AsyncDataFetcher: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Async task to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(JSON.stringify(json));
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text>Fetched Data:</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default AsyncDataFetcher;
