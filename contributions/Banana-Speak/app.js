var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" +"text=" + input
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong, please try again")
}

function clickHandler() {
    var inputText = txtInput.value;//input

        //calling server for processing
    fetch (getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; //output
        })
     .catch(errorHandler)
};

btnTranslate.addEventListener("click" , clickHandler)