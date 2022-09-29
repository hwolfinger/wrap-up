const countryList = document.getElementById('countryList');
const newCountryButton = document.getElementById('newCountryButton');
const newCountryInput = document.getElementById('newCountryInput');
const newCountryCodeInput = document.getElementById('newCountryCodeInput');
const newStateButton = document.getElementById('newStateButton');
const newStateInput = document.getElementById('newStateInput');

console.log(countryList)

function loadCountries() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch('https://xc-countries-api.herokuapp.com/api/countries/')
        // get the first promise, which resolves with the Response object
        .then((response) => response.json())
        // get the second promise, which resolves with the parsed text
        .then((countries) => {
            console.log(countries);
            countries.forEach(country => {
                // https://memorynotfound.com/dynamically-add-remove-options-select-javascript/
                countryList.options[countryList.options.length] = new Option(country.name, country.code);
            });
        });
}

function submitNewCountry() {
    // grab value from input field
    let newCountryName = newCountryInput.value;
    let newCountryCodeName = newCountryCodeInput.value;

    console.log("POST data to API using: " + newCountryName);

    // TODO derive country code from name
    // or create additional form field to supply country code

    // clear out the field on successful POST
    newCountryInput.value = '';
    newCountryCodeInput.value = '';

    // create object variable for newCountry
    let newCountry = {
        name: newCountryName,
        code: newCountryCodeName,
    }
    console.log(newCountry);

//     fetch('https://xc-countries-api.herokuapp.com/api/countries/' , {
//         method: 'POST' ,
//         headers: {
//             'Content-Type': 'application/json' ,
//         } ,
//         body: JSON.stringify(newCountry) ,
//     })

//     .then((response) => response.json());
//     .then(data => console.log(data));
}
    // // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // fetch('https://httpbin.org/post', {
    //     method: 'POST',
    //     body: JSON.stringify({})
    // })
    //     .then((response) => response.json())
    //     .then(data => console.log(data));


//clear stateList if there is anything in it
function removeOptions(stateList) {
    var i, L = stateList.options.length - 1;
    for(i = L; i >= 0; i--) {
        stateList.remove(i);
    }
}

function loadStates() {
    console.log("loadStates console: " + countryList.value)
    //  clear the dropdown list by calling the removeOptions function
    if (stateList.options.length > 0) {
        removeOptions(document.getElementById('stateList'));
    }

    let selectedCountry = countryList.value;
      
    fetch('https://xc-countries-api.herokuapp.com/api/countries/'+selectedCountry+'/states/')
        .then((response) => response.json())
        .then((states) => {
                states.forEach(state => {
                // console.log(state)
                stateList.options[stateList.options.length] = new Option(state.name, state.code);
        console.log(stateList.length)
            });
        })
}

function submitNewState() {
    // grab value from input field
    let newStateName = newStateInput.value;

    console.log("POST data API using: " + newStateName);
}

document.addEventListener('DOMContentLoaded', loadCountries);
countryList.addEventListener('change', loadStates);
newCountryButton.addEventListener('click', submitNewCountry);
newStateButton.addEventListener('click', submitNewState);