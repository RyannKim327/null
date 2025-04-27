npx react-native init MyTypeScriptApp --template react-native-template-typescript
cd MyTypeScriptApp
npm install axios
// src/ApiService.ts

import axios from 'axios';

export const fetchRandomData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
// App.tsx

import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, ActivityIndicator } from 'react-native';
import { fetchRandomData } from './src/ApiService';

const App = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchRandomData();
                setData(result);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView>
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView>
                <Text>{error}</Text>
            </SafeAreaView>
        );
    }
    
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default App;
npx react-native run-android
