package currencyconverter;

import io.github.cdimascio.dotenv.Dotenv;
import java.io.IOException;
import java.util.Scanner;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class CurrencyConverter {

    private static final Dotenv dotenv = Dotenv.load();
    private static final String API_KEY = dotenv.get("API_KEY");
    private static final String API_URL = "https://v6.exchangerate-api.com/v6/" + API_KEY + "/latest/";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the base currency (e.g., USD): ");
        String baseCurrency = scanner.nextLine().toUpperCase();

        System.out.println("Enter the target currency (e.g., EUR): ");
        String targetCurrency = scanner.nextLine().toUpperCase();

        System.out.println("Enter the amount to convert: ");
        double amount = scanner.nextDouble();

        try {
            double rate = fetchExchangeRate(baseCurrency, targetCurrency);
            double convertedAmount = amount * rate;
            System.out.printf("Converted amount: %.2f %s%n", convertedAmount, targetCurrency);
        } catch (IOException e) {
            System.out.println("Error fetching exchange rate: " + e.getMessage());
        }
    }

    private static double fetchExchangeRate(String baseCurrency, String targetCurrency) throws IOException {
        OkHttpClient client = new OkHttpClient();
        String url = API_URL + baseCurrency;
        
        Request request = new Request.Builder()
                .url(url)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected code " + response);
            }

            String jsonData = response.body().string();
            JsonObject jsonObject = JsonParser.parseString(jsonData).getAsJsonObject();
            return jsonObject.getAsJsonObject("conversion_rates").get(targetCurrency).getAsDouble();
        }
    }
}
