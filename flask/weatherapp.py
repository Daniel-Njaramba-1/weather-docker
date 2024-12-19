from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from config import WEATHER_API_KEY, BASE_URL

app = Flask(__name__)
CORS(app)

# Debugging output
print("Weather API Key:", WEATHER_API_KEY)
print("Base URL:", BASE_URL)

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "Please provide a city"}), 400

    url = f"{BASE_URL}?q={city}&appid={WEATHER_API_KEY}&units=metric"
    try:
        response = requests.get(url)
        data = response.json()
        if response.status_code != 200:
            return jsonify({"error": data.get("message", "An error occurred")}), response.status_code

        weather = {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "description": data["weather"][0]["description"],
            "humidity": data["main"]["humidity"],
            "wind_speed": data["wind"]["speed"]
        }
        print("Processed Weather Data:", weather)  # Log processed data
        return jsonify(weather)
    except Exception as e:
        print("Error:", str(e))  # Log any exceptions
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
