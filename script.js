function makeItBig() {
    let inputField = document.getElementById("inputField");
    let makeItBigButton = document.getElementById("makeItBigButton");
    makeItBigButton.addEventListener("click", () => {
        //hamta
        //let smallText = inputField.value;
        //andra
        //let bigText = smallText.toUpperCase();
        //spara
        //inputField.value = bigText;

        inputField.value = inputField.value.toUpperCase();
    }) 
}

makeItBig();