console.log('hello')

function prommycountry (response) {
    console.log(response.json());
}

function handler () {
    console.log(document);
    const dropdown = document.getElementById('country');
    console.log(dropdown);
    while (dropdown.length > 0) {                
    dropdown.remove(0);
    }
    // to queue the network call 
    const promi = fetch('https://xc-countries-api.herokuapp.com/api/countries/');
    // promi represents the promise that the browser will fulfill the request
    console.log(promi);
    // telling computer that when it is resolved, call prommy country
    promi.then(prommycountry);
    console.log('i did it!');
}

document.addEventListener ('DOMContentLoaded', handler);


/*
fetch('https://xc-countries-api.herokuapp.com/api/countries/<country_code>/states/')
//*/