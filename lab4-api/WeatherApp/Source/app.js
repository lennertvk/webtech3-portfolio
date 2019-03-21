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
        
    }
}

let app = new Weather('db4523c613cbbd173ea77a80db733bf5'); // zo kan je er een online plugin van maken en kunnen mensen zelf hun key ingeven
// komt binnen in de constructor

class Meme{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.initialize();
    }

    initialize(){
        this.getMeme();   
     // console.log("test2");
    }

    getMeme(){
        console.log("test3");
        let memesearch = "coding";
     /*
        document.getElementById('memesearch').addEventListener('keypress', function (e) {
                var key = e.which || e.keyCode;
                if (key === 13) { //stackoverflow
                    //console.log("enter");
                    let memesearch = document.getElementById('memesearch').value;
                    console.log(memesearch);
                }
            });
      */      
        let url = `http://version1.api.memegenerator.net//Instances_Search?q=${memesearch}&apiKey=${this.API_KEY}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {

                let randomnr = Math.floor(Math.random() * (json.result.length - 2));
                //console.log(randomnr);
                let memeurl = json.result[randomnr]['imageUrl'];
                document.getElementById('meme').innerHTML = '<img src="' + memeurl +'">';
         })
    }
}

let meme = new Meme('2014ed7c-1554-4504-9810-2d6713d79f37');
