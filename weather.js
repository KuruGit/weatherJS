class weather {
    constructor(){
        this.apiKey = "";
        this.city ="city";
        this.state="state";
    }

    //Fetch weather from api
    async getWeather(){
        const response = await fetch (``);
        
        const responseData = await response.json();

        return responseData.current_observation;
    }

    //Change weather location

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }

}