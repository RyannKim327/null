import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

interface ApiResponse {
  id: number;
  title: string;
}

const AsyncConnectionExample = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json: ApiResponse = await response.json();
      setData(json);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
      <Text>ID: {data?.id}</Text>
      <Text>Title: {data?.title}</Text>
    </View>
  );
};

export default AsyncConnectionExample;
