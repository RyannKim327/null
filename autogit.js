const androidUrl = "https://example.com/android-api-endpoint";

async function connectToAndroid() {
  try {
    const response = await fetch(androidUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "Hello, Android!" }),
    });

    if (!response.ok) {
      throw new Error("Failed to connect to Android device");
    }

    const result = await response.json();
    console.log(result);
    // Do something with the result here
  } catch (error) {
    console.error("Error connecting to Android device:", error);
  }
}

connectToAndroid();
