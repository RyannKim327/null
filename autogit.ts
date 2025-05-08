import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AsyncConnectionExample: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate an async task connecting to a server
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mocking an async call to a REST API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const json = await response.json();
      setData(json.title);
    } catch (e) {
      setError((e as Error).message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      {data && <Text>Received Data: {data}</Text>}
      <Button title="Fetch Again" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red' },
});

export default AsyncConnectionExample;
