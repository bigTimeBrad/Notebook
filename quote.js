function callAPI(endpointURI) {

    // Create a variable to return
    var returningString;

    // Create a request variable and sssign a new XMLHttpRequest onject to it
    var request = new XMLHttpRequest()

    // open a new connection, using the GET request on the URL endpoint
    request.open('GET', endpointURI, true)

    request.onload = function () 
    {
        //begin accessing the JSON here
        var data = JSON.parse(this.response)

        if(request.status >= 200 && request.status < 400)
        {
            var quote = data.contents.quotes[0].quote
            var author = data.contents.quotes[0].author

            document.getElementById("quote").innerHTML = "\"" + quote + "\""
            document.getElementById("author").innerHTML = "-" + author
            
            
            
        } 
        else 
        {
            console.log('error')
        }
    }

    //Send request
    request.send()

}

// then, call the function with the endpoint
callAPI(api.quote);



