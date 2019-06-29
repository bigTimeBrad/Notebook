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
           
            for(var i = 0; i < data.results.length; i++)
            {
                console.log(data.results[i].name)
            }
            
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
callAPI(api.endpoint);



