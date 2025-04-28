import { useState, useEffect } from 'react';

async function fetchData() {
  // Simulating a network request with a delay
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // 2-second delay
  });
}

function MyComponent() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await fetchData();
      setData(result);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <Text>{data}</Text>;
}
