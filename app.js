var button = document.querySelector("#btn-translate")
var tinput = document.querySelector("#txt-input")
var outputD = document.querySelector("#output-div")

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return url + "?" + input
}


function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something wrong with server! try again after some time")
}



function clickHandler() {


    var inputtxt = tinput.value

    fetch(getTranslationURL(inputtxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputD.innerText = translatedText;
        })
        .catch(errorHandler)
}

 
button.addEventListener("click", clickHandler)