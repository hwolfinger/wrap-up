const countryList = document.getElementById('countryList');
const newCountryButton = document.getElementById('newCountryButton');
const newCountryInput = document.getElementById('newCountryInput');
const newCountryCodeInput = document.getElementById('newCountryCodeInput');
const newStateButton = document.getElementById('newStateButton');
const newStateInput = document.getElementById('newStateInput');
const newStateCodeInput = document.getElementById('newStateCodeInput');
const countryListState = document.getElementById('countryListState');

console.log(countryList)

// sort function for Country and State lists
function compareNames(a, b) {
    if (a.name < b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
}

function loadCountries() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch('https://xc-countries-api.herokuapp.com/api/countries/')
        // get the first promise, which resolves with the Response object
        .then((response) => response.json())
        // get the second promise, which resolves with the parsed text
        .then((countries) => {
            console.log(countries);
            countries.sort(compareNames)
            countries.forEach(country => {
                // https://memorynotfound.com/dynamically-add-remove-options-select-javascript/
                countryList.options[countryList.options.length] = new Option(country.name, country.code);
                // console.log("loadCountry console: " + country.id);
            });
        });
}

function loadCountryListState() {
    fetch('https://xc-countries-api.herokuapp.com/api/countries/')
        .then((response) => response.json())
        .then((countries) => {
            console.log("Country List (State):" + countries);
            countries.sort(compareNames)
            countries.forEach(country => {
                countryListState.options[countryListState.options.length] = new Option(country.name, country.id);
                });
        });
}

function submitNewCountry() {
    // grab value from input field
    let newCountryName = newCountryInput.value;
    let newCountryCodeName = newCountryCodeInput.value;

    console.log("POST data to API using: " + newCountryName);

    // TODO derive country code from name (how would or could this be done?)

    // clear out the field on successful POST
    newCountryInput.value = '';
    newCountryCodeInput.value = '';

    // create object variable for newCountry
    let newCountry = {
        name: newCountryName,
        code: newCountryCodeName,
    }
    console.log(newCountry);

    fetch('https://xc-countries-api.herokuapp.com/api/countries/' , {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json' ,
        } ,
        body: JSON.stringify(newCountry) ,
    })

    .then((response) => response.json())
    .then(data => console.log(data));
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
    console.log("loadStates console (value): " + countryList.value)
    //  clear the dropdown list by calling the removeOptions function
    if (stateList.options.length > 0) {
        removeOptions(document.getElementById('stateList'));
    }

    let selectedCountry = countryList.value;
      
    fetch('https://xc-countries-api.herokuapp.com/api/countries/'+selectedCountry+'/states/')
        .then((response) => response.json())
        .then((states) => {
            // sort states alphabetically as they are added
            states.sort(compareNames);    
            states.forEach(state => {
                // console.log(state)
                stateList.options[stateList.options.length] = new Option(state.name, state.code)
                console.log(stateList.length);
        });
    })
}

function submitNewState() {
    // this uses submitNewCountry as its basis
    // please note - when i first approached this, i wondered how to associate the state with the proper country - i thought to myself "i need to figure out what country the state is for and leverage the countryId property..." then i realized (was shown) that the countryID property in the state api get = the id in the countries api get 
    
    // first, i want to associate this input with the Country selected above
    let countrySelected = document.getElementById('countryListState').value
    console.log("Selected = " + countrySelected)
    // console.log("This is the countryId selected: " + countrySelected)

    // grab value from input field
    let newStateName = newStateInput.value;
    let newStateCodeName = newStateCodeInput.value;
    let newStateCountryCode = countryListState.value;

    console.log("POST data API using: " + newStateName + " / Code: " + newStateCodeName);

    // clear out the field on successful POST
    newStateInput.value = '';
    newStateCodeInput.value = '';

    // create object variable for newState
    // countryId is pointing to countryList, using the .`options` method and then using the `selectedIndex method to pull the id property (at least that's what i want it to do)
    let newState = {
        name: newStateName,
        code: newStateCodeName,
        countryId: newStateCountryCode,
    }
    console.log(newState);

    let selectedCountry = countrySelected;
    console.log("selectedCountry = " + selectedCountry)

    fetch('https://xc-countries-api.herokuapp.com/api/countries/'+selectedCountry+'/states/' , {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json' ,
        } ,
        body: JSON.stringify(newState) ,
    })

    .then((response) => response.json())
    .then(data => console.log(data));
}

document.addEventListener('DOMContentLoaded', loadCountries);
document.addEventListener('DOMContentLoaded', loadCountryListState);
countryList.addEventListener('change', loadStates);
newCountryButton.addEventListener('click', submitNewCountry);
newStateButton.addEventListener('click', submitNewState);