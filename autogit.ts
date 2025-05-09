// MyAsyncModule.kt
package com.example.myapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactMethod
import android.os.AsyncTask

class MyAsyncModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "MyAsyncModule"

    @ReactMethod
    fun doBackgroundTask(input: String, promise: Promise) {
        object : AsyncTask<Void, Void, String>() {
            override fun doInBackground(vararg params: Void?): String {
                // Simulate some background processing
                Thread.sleep(2000)
                return "Processed: $input"
            }

            override fun onPostExecute(result: String) {
                promise.resolve(result)
            }
        }.execute()
    }
}
import { NativeModules, Platform } from 'react-native';

const { MyAsyncModule } = NativeModules;

async function runBackgroundTask(input: string): Promise<string> {
  if (Platform.OS !== 'android') {
    throw new Error("This module is only supported on Android");
  }
  
  try {
    const result: string = await MyAsyncModule.doBackgroundTask(input);
    return result;
  } catch (error) {
    throw new Error(`Background task failed: ${error}`);
  }
}

// Usage example
(async () => {
  try {
    const output = await runBackgroundTask("Hello AsyncTask");
    console.log(output); // Outputs: Processed: Hello AsyncTask
  } catch (e) {
    console.error(e);
  }
})();
