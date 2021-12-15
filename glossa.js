Είσοδος = {
    Όνομα: "text",
    Βάρος: "number",
    Ύψος: "number",
}

function Αλγόριθμος(Δεδομένα, Αποτελέσματα) {
    var ΔΜΣ

    ΔΜΣ = Δεδομένα.Βάρος / Δεδομένα.Ύψος ** 2
    if (ΔΜΣ < 18.5)
        Αποτελέσματα.Μήνυμα = "Επικίνδυνα χαμηλό σωματικό βάρος"
    else if (ΔΜΣ < 25)
        Αποτελέσματα.Μήνυμα = "Φυσιολογικό βάρος"
    else if (ΔΜΣ < 30)
        Αποτελέσματα.Μήνυμα = "Υπέρβαρος"
    else
        Αποτελέσματα.Μήνυμα = "Παχυσαρκία"

    turtle.align = "right";
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
    for (const [key, value] of Object.entries(Είσοδος)) {
        ins[key] = document.getElementById(`var_${key}`).value;
    }
    Αλγόριθμος(ins, outs);
    var ih = "<table>";  // innerHTML
    for (const [key, value] of Object.entries(outs)) {
        ih += `<tr><th><label for="var_${key}">${key}</label></th>
        <td>${value}</td></tr>`;
    }
    ih += "</table>"
    outputs.innerHTML = ih;
}

function onLoad() {
    var ih = "<table>";  // innerHTML
    for (const [key, value] of Object.entries(Είσοδος)) {
        ih += `<tr><th><label for="var_${key}">${key}</label></th>
        <td><input type="${value}" id="var_${key}" name="var_${key}"></td></tr>`;
    }
    ih += "</table>"
    app.innerHTML = `
    <h2>Δεδομένα</h2>
    <div id="inputs">
      ${ih}
    </div>
    <p>
      <input type="button" value="Εκτέλεση αλγορίθμου" onclick="main()">
      <input type="button" value="(Προβολή κώδικα)" onclick="window.alert(Αλγόριθμος.toString())">
    </p>
    <h2>Αποτελέσματα</h2>
    <div id="outputs">
      Συμπληρώστε τα δεδομένα και πατήστε [Εκτέλεση αλγορίθμου] για να εμφανιστούν εδώ τα αποτελέσματά του.
    </div>
    <hr>
    <div style="color: gray">
    <h3>Περιγραφή περιβάλλοντος GlossaJS</h2>
    <p>Το εκπαιδευτικό κομμάτι που προσφέρουμε είναι η ΑΕΠΠ-like βιβλιοθήκη για
      εκτέλεση αλγορίθμων με Δεδομένα/Αποτελέσματα, και αν θέλουμε και πρόσβαση
      σε logo-like turtle graphics κλπ.</p>
    <p>Εφόσον γράφουμε ΑΕΠΠ-like javascript, μπορούμε σαν περιβάλλον να
      χρησιμοποιούμε ο,τιδήποτε υποστηρίζει javascript, π.χ. notepad, vscode
      ή jsfiddle, ενώ με F12 ενεργοποιούμε τον ενσωματωμένο debugger των
        browsers.</p>
    <p>Αφού είμαστε στον browser, ο χειρισμός HTML, γραφικών, ήχου κλπ είναι πανεύκολος, π.χ. turtle.align = "right"</p>
    </div>
    <img id="turtle"
      src="https://download.seaicons.com/icons/martin-berube/flat-animal/256/turtle-icon.png"
      width="256px">`;
}

// window.onload = onLoad;
setTimeout(onLoad, 0);
