enum HTTPMethod {
    Geto = "GET",
    Posto = "POST",
    Puto = "PUT",
    Deleto = "DELETE"
}

function sendRequest(method: HTTPMethod, url: string): void {
    console.log(method + " " + url +  "-> 200 OK");
}

sendRequest(HTTPMethod.Geto, "https://example.com");

