class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        //console.log("test");
        this.initialize();
        
    }


    initialize(){
        this.getMyLocation();         
    }

    getMyLocation(){
        navigator.geolocation.getCurrentPosition((position) => {//hetzelfde als function (position){}
       // console.log("gevonden");   
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        this.getWeather(lat, lng);
    }, err => {
            console.log("error");
        });
    }

    getWeather(lat, lng){
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`
        fetch(url)
        .then(response => {

            return response.json();
        })
        .then(json => {
           //  console.log(json.currently.summary);
           console.log(json);
            let shortsumary = json.currently.summary;
            let atthisminute = json.hourly.summary;
            this.savatolocalstorage(shortsumary, atthisminute);
            this.loadfromlocalstorage();
        })
    }

    savatolocalstorage(shortsum, longsum){
        //console.log("we zijn er ");
        localStorage.setItem('short summary', shortsum);
        localStorage.setItem('long summary', longsum);
    }

    loadfromlocalstorage(){
        let shortsum = localStorage.getItem('short summary');
        let longsum = localStorage.getItem('long summary');
       // console.log(shortsum);
        document.getElementById('shortdiscription').innerHTML = shortsum;
        document.getElementById('atthisminute').innerHTML = longsum;
        console.log("klaar");
        
    }
}

let app = new Weather('db4523c613cbbd173ea77a80db733bf5'); // zo kan je er een online plugin van maken en kunnen mensen zelf hun key ingeven
// komt binnen in de constructor

class Poke{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.getRandomPoke();         
    }

    getRandomPoke(){
        let randomnr = Math.floor(Math.random() * 800) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${randomnr}/`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
           let img = json.sprites.front_default;
           console.log(json);
           let name = json.forms[0].name;
           document.getElementById('poke').innerHTML = `<img src="${img}">`;
           document.getElementById('name').innerHTML = name;
        })
    }

}


let poke = new Poke();