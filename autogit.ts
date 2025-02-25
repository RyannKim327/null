import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

// Simulated async function to fetch data
const fetchDataFromDevice = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched from Android device!");
        }, 2000); // Simulate a 2-second delay
    });
};

const App: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFetchData = async () => {
        setLoading(true);
        try {
            const result = await fetchDataFromDevice();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Button title="Fetch Data" onPress={handleFetchData} />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {data && <Text>{data}</Text>}
        </View>
    );
};

export default App;
