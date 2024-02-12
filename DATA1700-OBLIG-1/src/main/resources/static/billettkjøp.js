
let billettArray = [];
function kjoepBillett(){
    //initaliserer et array

    //let fValg = document.getElementById("filmvalg")
    let antall = this.document.getElementById("antall").value;
    let fNavn = this.document.getElementById("fNavn").value;
    let eNavn = this.document.getElementById("eNavn").value;
    let tlfNr = this.document.getElementById("tlfNr").value;
    let epost = this.document.getElementById("epost").value;

    //legger verdier inn i arrayet
    billettArray.push(antall,fNavn,eNavn,tlfNr,epost);

    //Lagrer  arrayet i lokalstorage
    localStorage.setItem("billettArray", JSON.stringify(billettArray));

    //Skriver ut array
    console.log("Antall billetter: " + localStorage.getItem(billettArray[0]) + ", Fornavn: " + billettArray[1] +
                ", Etternavn: " + billettArray[2] + ", Telefonnummer: " + billettArray[3] +
                ", Epost: " + billettArray[4]);

    //Fjerner tekst fra input-feltene
    document.getElementById("antall").value = ""
    document.getElementById("fNavn").value = ""
    document.getElementById("eNavn").value = ""
    document.getElementById("tlfNr").value = ""
    document.getElementById("epost").value = ""

    document.getElementById("alleBilletter").innerHTML = parsed;
    $("#alleBilletter").html(parsed);
}

function slettAlle(){
    localStorage.getItem(billettArray)
    for (i = 0; i < billettArray.length; i++){
        console.log(billettArray[i])
    }
}