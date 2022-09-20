// initial attempt at using fetch method (code via https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json)
let dropdown = document.getElementById('country');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Please select country';

dropdown.addEventListener(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https{://xc-countries-api.herokuapp.com/api/countries/';

fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.warn('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                let option;

                for (let i=0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i].name;
                    option.value = data[i].abbreviation;
                    dropdown.add(option);
                }
            });
        }
    )
    .catch(function(err) {
        console.error('Fetch Error -', err);
    });
    
/*
below is the original code > was not working, so thinking i need to fetch instead (see above)

let dropdown = document.getElementById('country');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Please select country';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://xc-countries-api.herokuapp.com/api/countries/';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
 if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].abbreviation;
        dropdown.add(option);
    }
 }   else {
    // reached the server, but it returned an error
 }
}

request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + url);
};

request.send();
*/