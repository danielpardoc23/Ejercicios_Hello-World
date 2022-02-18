function mostrarBotones(){
    document.getElementById("botonesEscondidos").style.display="block";
    document.getElementById("boton1").style.display="none";
}

function eliminarCompra(){
    document.getElementById("boton1").style.display="block";
    document.getElementById("botonesEscondidos").style.display="none";
    document.getElementById("cantidad").innerHTML=1;
    document.getElementById("unidades").innerHTML = " ud."
}

function addProducto(){
    let cantidad = document.getElementById("cantidad").innerHTML;
    if(cantidad == 1){
        document.getElementById("unidades").innerHTML = " uds."
    }
    cantidad++;
    document.getElementById("cantidad").innerHTML = cantidad;
}