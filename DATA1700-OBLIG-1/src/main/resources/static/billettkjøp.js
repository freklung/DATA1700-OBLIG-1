
let billettArray = [];
function kjoepBillett(){
    //initaliserer et array

    //let fValg = document.getElementById("filmvalg")
    let antall = document.getElementById("antall").value;
    let fNavn = document.getElementById("fNavn").value;
    let eNavn = document.getElementById("eNavn").value;
    let tlfNr = document.getElementById("tlfNr").value;
    let epost = document.getElementById("epost").value;

    //legger verdier inn i arrayet
    billettArray.push(antall,fNavn,eNavn,tlfNr,epost);

    //Lagrer  arrayet i lokalstorage
    localStorage.setItem("billettArray", JSON.stringify(billettArray));

    //Skriver ut array
    console.log("Antall billetter: " + JSON.stringify(billettArray[0]) + ", Fornavn: " + billettArray[1] +
                ", Etternavn: " + billettArray[2] + ", Telefonnummer: " + billettArray[3] +
                ", Epost: " + billettArray[4]);

    document.getElementById("antall").value = ""
    document.getElementById("fNavn").value = ""
    document.getElementById("eNavn").value = ""
    document.getElementById("tlfNr").value = ""
    document.getElementById("epost").value = ""

}
