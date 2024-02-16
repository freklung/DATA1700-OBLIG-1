Navn: Frederik Klungervik Larsen

StudentNr: frlar6327

Jeg har: laget en nettsiden for kjøp av kinobilletter som skal ta input fra en bruker,
        legge inputen inn i et array og så vise det på skjermen. Inputen skal valideres for
        riktig format og sjekke et brukeren faktisk har lagt inn noe.

Problemer: Det var vanskelig å finne ut av en måte å vise arrayet på html siden med riktig formatering. 
        Jeg endte opp med å bruke en switch som ga hvert element i arrayet en case. i denne casen ble 
        tekst lagt til foran verdien for å kunne vise riktig betegnelse på verdien. 
        Det var ikke så lett å gjøre input valideringen, da dette krevde en del å få til. Jeg fikk masse
        TypeError meldinger på grunn av at skriptet for input validering kjørte før det var mulig å angi 
        en input. Løste dette ved å få skriptet til å kjøre etter "DOMContentLoaded"
        RegEx var heller ikke så lett da det fantes lite dokumentasjon om hvordan man skulle formatere uttrykkene.
        endte opp med å bruke denne siden som hjelp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

Applikasjonen gjør: Ved hjelp av javascript kan applikasjonen ta input fra en bruker for at deres personalia
        registreres opp mot et kjøp av kinobilletter