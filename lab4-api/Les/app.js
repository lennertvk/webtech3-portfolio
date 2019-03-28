class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        console.log("test");
        this.initialize();
    }


    initialize(){
        //console.log(navigator);
        this.getMyLocation();         
    }

    getMyLocation(){
        navigator.geolocation.getCurrentPosition((position) => {//hetzelfde als function (position){}
        console.log("gevonden");   
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        this.getWeather(lat, lng);
    }, err => {
            console.log("error");
        });
    }

    getWeather(lat, lng){
        // AJAX call / XHR
       //// https://api.darksky.net/forecast/db4523c613cbbd173ea77a80db733bf5/37.8267,-122.4233?units=si
       // db4523c613cbbd173ea77a80db733bf5
       // https://cors-anywhere.herokuapp.com/
       // https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/db4523c613cbbd173ea77a80db733bf5/37.8267,-122.4233?units=si

        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`
        fetch(url)
        .then(response => {
            
            return response.json();
        })
        .then(json => {
            console.log(json);
           // let temp = document.createElement('h1');
           // temp.innerHTML = json.currently.summary;
            //let cursum = setInterval(json.currently.summary, 1000 * 60 * 60);
            // zorg dat de de api elk uur aangesproken word
            // laad de gegevens in de local storage
            // print de gegeevens uit de local storage

            //let cursum = setInterval(json.currently.summary, 1000 * 5);
            //let cursum = alert('testinggg');
            //console.log(cursum);

           // localStorage.setItem('current-summary', JSON.stringify(cursum));

            console.log(json.currently.summary);
            document.getElementById('shortdiscription').innerHTML = json.currently.summary;
            let atthisminute = json.hourly.summary;
            document.getElementById('atthisminute').innerHTML = atthisminute;
        })
    }
}
let app = new Weather('db4523c613cbbd173ea77a80db733bf5'); // zo kan je er een online plugin van maken en kunnen mensen zelf hun key ingeven
// komt binnen in de constructor

class Yoga{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.getRandomnr(); 
     // console.log(randomnr);
    }

    getRandomnr(){
       let randomnr = Math.floor((Math.random() * 10) + 1);
       console.log(randomnr);
       this.getRandomYogaPosition(randomnr);
    }

    getRandomYogaPosition(randomnr){
        let url = `baseurl.com/api/${randomnr}`;
    }
}