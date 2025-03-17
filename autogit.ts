import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

// Simulated API call
const fetchData = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from Android!");
        }, 2000); // Simulate a 2-second network request
    });
};

const App: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFetchData = async () => {
        setLoading(true);
        try {
            const result = await fetchData();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Optionally fetch data on component mount
        handleFetchData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Text>{data}</Text>
            )}
            <Button title="Fetch Data" onPress={handleFetchData} />
        </View>
    );
};

export default App;
npx react-native init MyApp --template react-native-template-typescript
