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

function onLoad() {
    var ih = "";  // innerHTML
    for (const [key, value] of Object.entries(Δεδομένα)) {
        ih += `<label for="var_${key}">${value["label"]}</label><br>
        <input type="${value["type"]}" id="var_${key}"><br>`;
    }
    inputs.innerHTML = ih;
}

window.onload = onLoad;
