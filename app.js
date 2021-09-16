var inputText = document.querySelector("#txt-input");
var translateButton = document.querySelector("#btn-translate");
var outputtext = document.querySelector("#output-div");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text

}
//console.log(getTranslationURL("I am richa"));
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    var textInput = inputText.value;


    fetch(getTranslationURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputtext.innerText = translatedText;
        })
        .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler);