import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

// Simulated async task, like connecting to a service or fetching data
async function connectAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate success/failure randomly
      const success = Math.random() > 0.3;
      if (success) {
        resolve('Connection successful!');
      } else {
        reject(new Error('Connection failed.'));
      }
    }, 2000);
  });
}

export default function AsyncConnectionComponent() {
  const [status, setStatus] = useState<string>('Disconnected');
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    setStatus('Connecting...');
    try {
      const message = await connectAsync();
      setStatus(message);
    } catch (e) {
      setStatus((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Status: {status}</Text>
      {loading ? <ActivityIndicator size="small" /> : null}
      <Button title="Connect" onPress={handleConnect} />
    </View>
  );
}
