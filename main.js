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
    const promi = fetch('https://xc-countries-api.herokuapp.com/api/countries/');
    console.log(promi);
    promi.then(prommycountry);
}

document.addEventListener ('DOMContentLoaded', handler);


/*
fetch('https://xc-countries-api.herokuapp.com/api/countries/<country_code>/states/')
//*/