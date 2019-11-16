class Storage {
    constructor() {
        this.city;
        this.defaultCity = "katsina";
        this.name;
        this.defaultName = "your name here";
    }

    getLocation() {
        //get city
        if(localStorage.getItem("city") === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem("city");
        }
        //get name
        if(localStorage.getItem("name") === null) {
            this.name = this.defaultName;
        } else {
            this.name = localStorage.getItem("name");
        }

        return {
            city: this.city,
            name: this.name
        }
    }

    setLocation(city, name) {
        //set location on local storage
        localStorage.setItem("city", city);
        localStorage.setItem("name", name);
    }
}