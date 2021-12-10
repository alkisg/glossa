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
    outputs.innerHTML = `<pre>
    ${JSON.stringify(outs)}
    </pre>
    `
}

function onLoad1() {
    document.write(`
    <h2>Δεδομένα</h2>
    <div id="inputs">
      Εδώ εμφανίζονται τα δεδομένα με το που ανοίγει η σελίδα.
    </div>
    <h2>Εκτέλεση αλγορίθμου</h2>
    <p>Όποτε θέλετε να εκτελέσε τον αλγόριθμο, πατήστε το κουμπί:
      <input type="button" value="Εκτέλεση αλγορίθμου" onclick="main()">
    </p>
    <h2>Αποτελέσματα</h2>
    <div id="outputs">
      Εδώ θα εμφανιστούν τα αποτελέσματα.
    </div>
`);
    setTimeout(onLoad2, 0);
}

function onLoad2() {
    var ih = "";  // innerHTML
    for (const [key, value] of Object.entries(Δεδομένα)) {
        ih += `<label for="var_${key}">${key}</label><br>
        <input type="${value}" id="var_${key}"><br>`;
    }
    inputs.innerHTML = ih;
}

setTimeout(onLoad1, 0);

