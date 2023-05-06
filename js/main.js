let precesador = "procesador";
let monitor = "monitor";
let fuente = "fuente";
let diadema = "diadema";
let caja  = "caja";

const precioProcesador = 120000;
const precioMonitor = 15000;
const precioFuente = 1000;
const precioDiadema = 7000;
const precioCaja = 4000;

var preciosTotales = 0;

let nombreUsuario = prompt("Ingresa tu nombre ");
alert("hola " + nombreUsuario);
alert("Bienvendio a nuestra tienda virtual de accesorios para tu pc");

let continuar = true;
while (continuar) {
  let nombreProducto = prompt(
    "CUAL PRODUCTO DESEAS DE NUESTRO PORTAFOLIO : procesador, monitor, fuente, diadema, caja "
  );
  let cantidad = parseInt(prompt("ingresa la cantidad"));

  switch (nombreProducto) {
    case "procesador":
        precioProductoMasCantidad(precioProcesador, cantidad);
      continuar = confirm("¿quieres agregar más productos a tu compra?");

      break;

    case "monitor":
        precioProductoMasCantidad(precioMonitor, cantidad);
      continuar = confirm("¿quieres agregar más productos a tu compra?");

      break;

      case "fuente":
        precioProductoMasCantidad(precioFuente, cantidad);
      continuar = confirm("¿quieres agregar más productos a tu compra?");
   
      break;

      case "diadema":
        precioProductoMasCantidad(precioDiadema, cantidad);
      continuar = confirm("¿quieres agregar más productos a tu compra?");

      break;

      case "caja":
        precioProductoMasCantidad(precioCaja, cantidad);
      continuar = confirm("¿quieres agregar más productos a tu compra?");

    default:
      alert("producto no disponible");
      break;
  }
  if (continuar != true) {
    alert("gracias por tu compra");
    alert("precio total de tu compra es de $"+ preciosTotales)
  }
}

function precioProductoMasCantidad(producto, cantidad){
  var precioInicial = producto * cantidad;

  alert("el precio total de este producto es de $" + precioInicial);   
  preciosTotales =  preciosTotales + precioInicial;  
}
