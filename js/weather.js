class Weather {
    constructor(city) {
        this.appid = "efe5c7ec7512a6fdaec60a4ed38391e5";
        this.fahrenheit = "imperial";
        this.celcius = "metric";
        this.city = city;
    }

    async getWeather() {
        //fetch the weather info from openweathermap
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},NG&appid=${this.appid}&units=${this.celcius}`);
        //wait for the response to finish then get the data
        const responseData = await response.json();
        //Then return the data collected
        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}
