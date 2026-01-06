const form = document.getElementById("calculatorForm");
const resultDiv = document.getElementById("results");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // empêche le rechargement

    const n1 = parseFloat(document.getElementById("number1").value);
    const n2 = parseFloat(document.getElementById("number2").value);

    // Vérification de saisie
    if (isNaN(n1) || isNaN(n2)) {
        resultDiv.innerHTML = " Veuillez entrer des nombres valides.";
        return;
    }

    // Gestion division par zéro
    if (n2 === 0) {
        resultDiv.innerHTML = " Division par zéro impossible.";
        return;
    }

    const somme = n1 + n2;
    const difference = n1 - n2;
    const produit = n1 * n2;
    const quotient = n1 / n2;

    resultDiv.innerHTML = `
        Somme : ${somme} <br>
        Différence : ${difference} <br>
        Produit : ${produit} <br>
        Quotient : ${quotient}
    `;
});
