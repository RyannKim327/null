import android.os.AsyncTask;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebTask extends AsyncTask<Void, Void, Void> {

    private WebView webView;

    public WebTask(WebView webView) {
        this.webView = webView;
    }

    @Override
    protected Void doInBackground(Void... voids) {
        // Connect to a website
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("http://www.example.com");

        return null;
    }

    @Override
    protected void onPostExecute(Void aVoid) {
        // Run JavaScript function after the website is loaded
        webView.evaluateJavascript("javascript: document.getElementById('elementId').innerHTML = 'Hello, World!';", null);
    }
}
