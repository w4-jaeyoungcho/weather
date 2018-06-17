
import { WEATHER_API_KEY } from "../keys";

// Action Types

export const FETCH_WEATHER = "FETCH_WEATHER";

function get_url(city) {
    return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}`;
}

function query_weathers(term) {
    const url = get_url(term);

    return fetch(url)
        .then((res) => {
            const data = JSON.parse(res);
            return data;
        });
}

export function fetchWeather(city) {
    const url = get_url(city);
    const data = fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw "Not ok";
            }
            return res.json();
        });


    return {
        type: FETCH_WEATHER,
        payload: data,
        // banana: "delicious",
    };
}


