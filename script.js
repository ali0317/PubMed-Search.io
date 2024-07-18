
function generateSearchString() {
    var userInput = document.getElementById('inputTerms').value.trim();
    var termsArray = userInput.split(",").map(term => term.trim());
   
    // AJAX POST request to Flask backend
    $.ajax({
        url: 'https://aliamir0317.pythonanywhere.com:8080/generate_search',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'user_terms': termsArray }),
        success: function(response) {
            // Display the generated search string in the output div
            document.getElementById('searchStringOutput').innerHTML = '<p>' + response.search_string + '</p>';
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}
