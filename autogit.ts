import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

// Simulated async function to fetch data
const fetchData = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); // Simulate a 2-second network request
    });
};

const App: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchData();
            setData(result);
        } catch (err) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Button title="Fetch Data" onPress={handleFetchData} />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {data && <Text>{data}</Text>}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    );
};

export default App;
