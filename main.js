const countryList = document.getElementById('countryList');
const newCountryButton = document.getElementById('newCountryButton');
const newCountryInput = document.getElementById('newCountryInput');
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

    console.log("POST data to API using: " + newCountryName);

    // TODO derive country code from name
    // or create additional form field to supply country code

    // clear out the field on successful POST
    newCountryInput.value = '';

    // // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // fetch('https://httpbin.org/post', {
    //     method: 'POST',
    //     body: JSON.stringify({})
    // })
    //     .then((response) => response.json())
    //     .then(data => console.log(data));

}


function loadStates() {
    console.log("loadStates console: " + countryList.value)
    
    let selectedCountry = countryList.value;
    fetch('https://xc-countries-api.herokuapp.com/api/countries/'+selectedCountry+'/states/')
        .then((response) => response.json())
        .then((states) => {
            // clear the dropdown list
            document.getElementById(stateList).options.length = 0;
            states.forEach(state => {
                // console.log(state)
                stateList.options[stateList.options.length] = new Option(state.name, state.code);
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