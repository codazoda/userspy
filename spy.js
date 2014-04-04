$('body button').click( function(e) { logValues( $(e.target), 'click' ) } );
$('body').change( function(e) { logValues( $(e.target), 'change' ) } );
//$('body').focusout( function(e) { logValues( $(e.target), 'focusout' ) } );

function logValues(element, type) {
    var json;
    json += "{";
    json += "id: '" + $(element).attr('id') + "', ";
    json += "type: '" + type + "', ";
    json += "class: '" + $(element).attr("class") + "', ";
    json += "val: '" + $(element).val() + "'";
    json += "}";
    console.log(json);
}