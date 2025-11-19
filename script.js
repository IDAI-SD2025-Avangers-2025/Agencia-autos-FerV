function Calculate() {

    var financiamiento =  document.querySelector("input[name='financiamiento']:checked").value;

    var verif = 0;

    document.querySelectorAll("input[name='verif']:checked").forEach(c => { verif += parseFloat(c.value) }); 

    var auto = parseFloat(document.getElementById('cars').value);

    var subtotal =  verif + auto
    var tax = subtotal * 0.16;
    var total = subtotal + tax;

    alert(financiamiento)

    document.getElementById("calculate").value = total;
}