//initaliserer et array utenfor scope av kjoepbillet slik at arrayet kan tas inn av flere funksjoner
var array = JSON.parse(localStorage.getItem('antall')) || [];

function kjoepBillett(){
    //Tar inputs fra alle feltene
    //let fValg = this.document.getElementById("fValg").value;
    let antall = this.document.getElementById("antall").value;
    let fNavn = this.document.getElementById("fNavn").value;
    let eNavn = this.document.getElementById("eNavn").value;
    let tlfNr = this.document.getElementById("tlfNr").value;
    let epost = this.document.getElementById("epost").value;

    // bare en test inntil videre. gjør alle inputene til en string
    var alleInputs = ", Antall billetter: " + antall + ", Fornavn: " + fNavn
                                + ", Etternavn: " +  eNavn + ", Telefonnummer: "+ tlfNr + ", Epost: "+ epost;

    //legger individuelle inputs inn i arrayet array og utvider størrelsen på arrayet
    array.unshift(antall,fNavn,eNavn,tlfNr,epost)

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