// api.ts
export const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};

// main.ts
import { fetchData } from './api';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = async () => {
    try {
        console.log("Fetching posts...");
        const posts = await fetchData(apiUrl);
        console.log("Posts fetched successfully:", posts);
    } catch (error) {
        console.error("Error while fetching posts:", error);
    }
};

// Call the loadPosts function to initiate the fetch
loadPosts();
// In your MainActivity.java or MainActivity.kt
WebView myWebView = findViewById(R.id.webview);
myWebView.getSettings().setJavaScriptEnabled(true);
myWebView.loadUrl("file:///android_asset/index.html");
