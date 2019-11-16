class UI {
    constructor() {
        this.icon = document.querySelector(".weather__condition");
        this.city = document.querySelector(".weather__location");
        this.temp = document.querySelector(".weather__deg");
        this.name = document.querySelector(".w-name");
        this.wind_speed = document.querySelector("#w-wind-speed");
        this.clouds = document.querySelector("#w-clouds");
        this.humidity = document.querySelector("#w-humidity");
        this.coords = document.querySelector("#w-coords");
    }

    paint(weather) {
        //Local storage class
        const storage = new Storage();
        const weatherLocation = storage.getLocation();
        //Get the the first letter of name var
        const name = String(weatherLocation.name);

        let output = "";

        output += `
        <div class="weather__bg">
                    <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" class="weather__condition sh-txt" alt="icon">
                    <h4 class="weather__location sh-txt">${weather.name}</h4>
                    <h1 class="weather__deg sh-txt">${weather.main.temp.toFixed("1")} &deg;c</h1>
                </div>
                <figcaption>
                    <ul>
                        <li class="nm">
                            <span>Name:</span>
                            <span class="w-name">${name}</span>
                        </li>
                        <li>
                            <span>Wind:</span>
                            <span class="w-wind-speed">${weather.wind.speed } m/s</span>
                        </li>
                        <li>
                            <span>Cloudiness:</span>
                            <span class="w-cloud">${weather.weather[0].description}</span>
                        </li>
                        <li>
                            <span>Humidity:</span>
                            <span class="w-humidity">${weather.main.humidity} %</span>
                        </li>
                        <li>
                            <span>Geo coords:</span>
                            <span class="w-coords">[lon: ${weather.coord.lon} lat:${weather.coord.lat}]</span>
                        </li>
                    </ul>
                </figcaption>
        `;

        document.querySelector("#output").innerHTML = output;

    }
}