let valid = false;
var dataDict = {
    'houseNumber': null,
    'street': null,
    'suburb': null,
    'city': null
}

let autocomplete;

// subscribe to ready event
JFCustomWidget.subscribe("ready", function (msg) {
    console.log("Jotform ready msg received")
})

// subscribe to submit event
JFCustomWidget.subscribe("submit", function (msg) {
    var data = {
        valid: isValid(dataDict),
        value: JSON.stringify(dataDict)
    }
    JFCustomWidget.sendData(data);
})

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'),
        {
            componentRestrictions: { 'country': ['NZ'] },
            fields: ['place_id', 'geometry', 'name', 'address_components', 'types']
        }
    )
    autocomplete.addListener('place_changed', onPlaceChanged)
}

function onPlaceChanged() {
    const place = autocomplete.getPlace();
    for (const [i, entry] in dataDict.entries()) {
        valid = !!place.geometry;
        let valueToSet = (valid) ? place.address_components[i].long_name : null
        document.getElementById(entry).value = valueToSet;
    }
}

function isValid(dataDict) {
    valid = true;
    for (const [_, value] of Object.entries(dataDict)) {
        if (!value) {
            valid = false;
        }
    }
    return valid
}

alert('inited')