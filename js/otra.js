function calcularPresupuesto(){
    let numeroinv =Number(document.getElementById("numero-inv").value);
    let costocom =Number(document.getElementById("cost-comida").value);
    let costobeb =Number(document.getElementById("cost-bebida").value);
    let costodec =Number(document.getElementById("cost-decor").value);
    let costomus =Number(document.getElementById("cost-musica").value);
    let propinaporc =Number(document.getElementById("propina-porc").value)

    let comidatotal =numeroinv*costocom;
    document.getElementById("comida-total-s").innerText =comidatotal.toLocaleString("es-CO");

    let bebidatotal =numeroinv*costobeb;
    document.getElementById("bebida-total-s").innerText =bebidatotal.toLocaleString("es-CO");

    let decoraciontotal =costodec*numeroinv;
    document.getElementById("decoracion").innerText =decoraciontotal.toLocaleString("es-CO");

    let musicatotal =costomus*numeroinv;
    document.getElementById("musica").innerText =musicatotal.toLocaleString("es-CO");

    let subtotal =comidatotal+bebidatotal+costodec+costomus;
    document.getElementById("subtotal").innerText =subtotal.toLocaleString("es-CO");

    let propina =subtotal*(propinaporc/ 100)
    document.getElementById("propina").innerText =propina.toLocaleString("es-CO");

    let totalgeneral =subtotal+propina;
    document.getElementById("total-general").innerText =totalgeneral.toLocaleString("es-CO");

    let costoporinvitados = totalgeneral/numeroinv
    document.getElementById("costo-inv").innerText =costoporinvitados.toLocaleString("es-CO")

}
