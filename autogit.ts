// App.tsx
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, ActivityIndicator } from 'react-native';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Button title="Fetch Data" onPress={fetchData} />
      {loading && <ActivityIndicator />}
      {error && <Text>Error: {error}</Text>}
      {data && (
        <Text>
          Fetched {data.length} posts.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default App;
