Δεδομένα = {
  όνομα: "text",
  ηλικία: "number"
}

function Αλγόριθμος (Δεδομένα, Αποτελέσματα) {
    όνομα = Δεδομένα.όνομα;
    ηλικία = Δεδομένα.ηλικία;
    μήνυμα = "";

    if (ηλικία < 81)
        μήνυμα = "Ο/Η " + όνομα + " είναι ανήλικος"
    else
        μήνυμα = "Ο/Η " + όνομα + " είναι ενήλικας"
    Αποτελέσματα.μήνυμα = μήνυμα;
}

/*
Βιβλιοθήκη για μια πιο "ΑΕΠΠ-like" Javascript.
*/

/* Our only global variable, P for program */
const P = {
    input_types: ["button", "checkbox", "color", "date", "datetime-local",
        "email", "file", "hidden", "image", "month", "number", "password",
        "radio", "range", "reset", "search", "submit", "tel", "text", "time",
        "url", "week"],
    types: [],
    labels: []
}

function inputNumber(label) {
    return { type: "number", label: label };
}

function inputText(label) {
    return { type: "text", label: label };
}

function main() {
    ins = {}
    outs = {}

    var i = 0;
    for (const [key, value] of Object.entries(Δεδομένα)) {
        ins[key] = document.getElementById(`var_${key}`).value;
    }
    Αλγόριθμος(ins, outs);
    var ih = ""
    outputs.innerHTML = `<pre>
    ${JSON.stringify(outs)}
    </pre>
    `
}

function onLoad() {
    var ih = "";  // innerHTML
    for (const [key, value] of Object.entries(Δεδομένα)) {
        ih += `<label for="var_${key}">${key}</label><br>
        <input type="${value}" id="var_${key}"><br>`;
    }
    glossajs.innerHTML = `
    <h1>GlossaJS</h1>
    <p>Συμπληρώστε τα δεδομένα και πατήστε το κουμπί [Εκτέλεση
      αλγορίθμου].</p>
    <p>Το εκπαιδευτικό κομμάτι που προσφέρουμε είναι η ΑΕΠΠ-like βιβλιοθήκη για
      εκτέλεση αλγορίθμων με Δεδομένα/Αποτελέσματα.</p>
    <p>Εφόσον γράφουμε ΑΕΠΠ-like javascript, μπορούμε σαν περιβάλλον να
      χρησιμοποιούμε ο,τιδήποτε υποστηρίζει javascript, π.χ. vscode ή jsfiddle,
      ενώ με F12 ενεργοποιούμε τον ενσωματωμένο debugger των browsers.</p>
    <h2>Δεδομένα</h2>
    <div id="inputs">
      ${ih}
    </div>
    <p>
    <input type="button" value="Εκτέλεση αλγορίθμου" onclick="main()">
    </p>
    <h2>Αποτελέσματα</h2>
    <div id="outputs">
      Εδώ θα εμφανιστούν τα αποτελέσματα.
    </div>
    <h2>Περιοχή γραφικών</h2>
    <p>Εδώ στο μέλλον θα υποστηρίζουμε και canvas για ζωγραφική/χελώνες/ήχο κλπ.</p>
    <img src="canvas.png">`;
}

window.onload = onLoad;
