//initaliserer et array utenfor scope av kjoepbillet slik at arrayet kan tas inn av flere funksjoner
var array = JSON.parse(localStorage.getItem('antall')) || [];

function kjoepBillett(){
    //Tar inputs fra alle feltene
    let fValg = this.document.getElementById("fValg").value;
    let antall = this.document.getElementById("antall").value;
    let fNavn = this.document.getElementById("fNavn").value;
    let eNavn = this.document.getElementById("eNavn").value;
    let tlfNr = this.document.getElementById("tlfNr").value;
    let epost = this.document.getElementById("epost").value;

    //legger individuelle inputs inn i arrayet array og utvider størrelsen på arrayet
    array.unshift(fValg,antall,fNavn,eNavn,tlfNr,epost)

    //setter alleinputs som et object i localstorage
    localStorage.setItem("array", JSON.stringify(array))

    //Fjerner tekst fra input-feltene
    document.getElementById("antall").value = ""
    document.getElementById("fNavn").value = ""
    document.getElementById("eNavn").value = ""
    document.getElementById("tlfNr").value = ""
    document.getElementById("epost").value = ""

    //kaller den neste funksjonen
    visArray()
}

function visArray() {
    var visArray = document.getElementById("alleBilletter");
    visArray.innerHTML = " "; // Clear the list

    // lager en ny paragraph for hvert element i arrayet
    array.forEach((input, nummer) => {
        var nyBillett = document.createElement("p");
        var label = '';
        // setter format for printing av arrayets innhold
        switch (nummer %   6) {
            case  0: label = 'fValg: '; break
            case  1: label = 'Antall: '; break
            case  2: label = 'fNavn: '; break
            case  3: label = 'eNavn: '; break
            case  4: label = 'tlfNr: '; break
            case  5: label = 'epost: '; break
        }
        //definerer innholdet til elementet nybillett
        nyBillett.textContent = label + input
        visArray.appendChild(nyBillett)
    });
}

function slettBilletter(){
    // sletter alt fra localstorage
    localStorage.clear()
    //Sletter html innhold forbundet med id alleBilletter
    var slettArray = document.getElementById("alleBilletter")
    slettArray.replaceWith(" ");
}

//venter til nettsiden er lastet inn med å kjøre skriptet. uten dette vil vi bare få masse typeerror meldinger
document.addEventListener("DOMContentLoaded", function (){
//Oppretter const data for inputfeltene i html filen
const antallValid = document.getElementById("antall")
const fNavnValid = document.getElementById("fNavn")
const eNavnValid = document.getElementById("eNavn")
const tlfNrValid = document.getElementById("tlfNr")
const epostValid = document.getElementById("epost");

// oppretter const data for hvert felt av errormeldingene i html
const antallerror = document.getElementById("antallerror")
const fnavnerror = document.getElementById("fnavnerror")
const enavnerror = document.getElementById("eNavnerror")
const tlferror = document.getElementById("tlferror")
const eposterror = document.getElementById("eposterror");

// definerer regex for hvordan epost og
const tlfRegexp = /[0-9]/;
const epostRegexp = /\S+@\S+\.\S+/;
function validerInput(inputFelt, feilMld, regex) {
    inputFelt.addEventListener("blur", () => {
        feilMld.textContent = "";
        if (!regex.test(inputFelt.value)) {
            feilMld.textContent = "Du må angi korrekt informasjon!!";
        }
    });
}

//sjekker at antall ikke er lik 0
function validerNot0(inputfelt, feilmld){
    inputfelt.addEventListener("blur", () =>{
        //setter feilmeldingen til å defaulte til å være blank
        feilmld.textContent = "";
        //hvis man angir antall billetter til å være lik eller mindre vil siden si ifra om dette
        if (inputfelt >= 0){
            feilmld.textContent = "Du må velge antall billetter";
        }
});}

//kaller valideringsfunksjonene på de forskjellige inputfeltene
validerNot0(antallValid, antallerror)
validerInput(fNavnValid, fnavnerror, /^[a-zA-Z]/)
validerInput(eNavnValid, enavnerror, /^[a-zA-Z]/ )
validerInput(tlfNrValid, tlferror, tlfRegexp)
validerInput(epostValid, eposterror, epostRegexp)
})