let valid = false;
let dataDict = {
    'street_number': null,
    'route': null,
    'political': null,
}

let autocomplete;

// subscribe to ready event
JFCustomWidget.subscribe("ready", function (msg) {
    console.log("Jotform ready msg received")
})

// subscribe to submit event
JFCustomWidget.subscribe("submit", function (msg) {
    console.log("Jotform submit msg received")
    var data = {
        valid: valid,
        value: JSON.stringify(dataDict)
    }
    JFCustomWidget.sendSubmit(data);
    console.log("Jotform data sent")
})


function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'),
        {
            componentRestrictions: { 'country': ['NZ'] },
            fields: ['place_id', 'geometry', 'name', 'address_components', 'types']
        }
    )
    autocomplete.addListener('place_changed', onPlaceChanged);
}

// called each time an address selected from the dropdown
function onPlaceChanged() {
    const place = autocomplete.getPlace();
    if (!!place.geometry) {
        valid = true;
        updateDataDict(place.address_components);
    } else {
        valid = false;
        clearDataDict();
    }
    updateHTML();
}

// pulls vals from places api and adds them to the dictionary
function updateDataDict(components) {
    clearDataDict();
    // update new ones
    Object.values(components).forEach(component => {
        let types = component['types'];
        Object.entries(dataDict).forEach(entry => {
            const [key, value] = entry;
            if (!value && types.includes(key)) {
                dataDict[key] = component.long_name
            }
        });
    });
}

// resets all vals in the dictionary, a clean slate
function clearDataDict() {
    Object.keys(dataDict).forEach(key => {
        dataDict[key] = null;
    })
}

// punts the values in the dict into the input fields
function updateHTML() {
    Object.keys(dataDict).forEach(key => {
        document.getElementById(key).value = dataDict[key];
    })
}