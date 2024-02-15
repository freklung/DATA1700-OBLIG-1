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

    visArray()
}

function visArray(){
    var visArray = document.getElementById("alleBilletter");
    //clearer listen slik at det ikke vises noe før vi vil det
    visArray.innerHTML = " ";
    //skaper et nytt element i listen i html med text fra arrayet
    array.forEach(function(input) {
        var nyBillett = document.createElement("p")
        nyBillett.textContent = input;
        visArray.appendChild(nyBillett)
    })
}

function slettBilletter(){
    localStorage.clear()
    var slettArray = document.getElementById("alleBilletter")
    slettArray.replaceWith(" ");
}

document.addEventListener("DOMContentLoaded", function (){
//Oppretter const data for inputfeltene i html filen
const antallValid = document.getElementById("antall")
const fNavnValid = document.getElementById("fNavn")
const eNavnValid = document.getElementById("eNavn")
const tlfNrValid = document.getElementById("tlfNr")
const epostValid = document.getElementById("epost")

const antallerror = document.getElementById("antallerror")
const fnavnerror = document.getElementById("fnavnerror")
const enavnerror = document.getElementById("eNavnerror")
const tlferror = document.getElementById("tlferror")
const eposterror = document.getElementById("eposterror")

const tlfRegexp = /[0-9]/;
const epostRegexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
function validerInput(inputFelt, feilMld, regex) {
    inputFelt.addEventListener("blur", () => {
        feilMld.textContent = "";
        if (!regex.test(inputFelt.value)) {
            feilMld.textContent = "Du må angi korrekt informasjon!!";
        }
    });
}

function validerNot0(inputfelt, feilmld){
    inputfelt.addEventListener("blur", () =>{
        feilmld.textContent = "";
        if (inputfelt >= 0){
            feilmld.textContent = "Du må velge antall billetter";
        }
});}

validerNot0(antallValid, antallerror)
validerInput(fNavnValid, fnavnerror, /^[a-zA-Z]/)
validerInput(eNavnValid, enavnerror, /^[a-zA-Z]/ )
validerInput(tlfNrValid, tlferror, tlfRegexp)
validerInput(epostValid, eposterror, epostRegexp)
})