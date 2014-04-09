// Generate an ID
var spyId = spyGenerateId();
var spyUser;

// Set the user if a function exists for it
if ( typeof(spyGenerateUser) == "function" ) {
    spyUser = spyGenerateUser();
}

// Setup the events
$('body button').click( function(e) { spyLog( $(e.target), 'click' ) } );
$('body').change( function(e) { spyLog( $(e.target), 'change' ) } );
//$('body').focusout( function(e) { logValues( $(e.target), 'focusout' ) } );

function spyLog(element, type) {
    var json;
    json += "{";
    json += "visit: '" + spyId + "', ";
    json += "user: '" + spyUser + "', ";
    json += "id: '" + $(element).attr('id') + "', ";
    json += "type: '" + type + "', ";
    json += "class: '" + $(element).attr("class") + "', ";
    json += "val: '" + $(element).val() + "'";
    json += "}";
    console.log(json);
}

function spyGenerateId() {
    // Possible characters
    var idChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charLength = idChar.length;
    var thisChar;
    var thisId = "";
    // Pick 16 digits
    for(i=0;i<16;i++) {
        thisChar = Math.floor(Math.random()*charLength);
        thisId = thisId + idChar.substring(thisChar, thisChar+1);
    }
    // Return the id
    return thisId;
}