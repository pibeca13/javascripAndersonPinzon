class Producto {
  constructor (nombre,precio,descripcion){
    this.nomnbre = nombre
    this.precio = precio        
    this.descripcion = descripcion
  } 
}

const procesador1 = new Producto ("procesador","$19000 X unidad","INTEL CORE i9")
const procesador2 = new Producto ("procesador","$12000 X unidad","INTEL CORE 17")
const procesador3 = new Producto ("procesador","$10000 X unidad","INTEL CORE 13")

const monitor1 = new Producto ("monitor","$1500 X unidad","SAMWUNG smart tv de FHD")
const monitor2 = new Producto ("monitor","$1200 X unidad","LG pantalla ips" )
const monitor3 = new Producto ("monitor","$900 X unidad","SONY tecnologia led" )

const board1 = new Producto ("board","$20000 X unidad","ASUS ROG 3ª generación Ryzen con procesadores gráficos Radeon" )
const board2 = new Producto ("board","$18000 X unidad","ASUS INTEL estranguladores de aleación de alta calidad y condensador" )
const board3 = new Producto ("board","$12000 X unidad","ASUS AMD 12ª generación, compatible con PCIe 5.0, DDR5 y Windows 11" )

const memoria1 = new Producto ("memoria","$5000 X unidad","NVTEK 16 GB DDR4-2666 para ordenador de sobremesa" )
const memoria2 = new Producto ("memoria","$3000 X unidad","ORSERI alto rendimiento con un generoso espacio de overclocin" )
const memoria3 = new Producto ("memoria","$1000 X unidad","SILICON Intel Extreme Memory Profile (Intel XMP)." )

const discoDuro1 = new Producto ("disco duro","$900 X unidad","SAMSUNG  más rápido que la unidad de disco duro externa (HDD)" )
const discoDuro2 = new Producto ("disco duro","$700 X unidad","TOSHIBA(comprueba la compatibilidad en el sitio web Consumer HDD de Toshiba)" )
const discoDuro3 = new Producto ("disco durO","$200 X unidad","SATA Velocidad de rotación, caché de 64 MB)" )


const precioProcesador1 = 19000;
const precioProcesador2 = 12000;
const precioProcesador3 = 10000;

const precioMonitor1 = 1500;
const precioMonitor2 = 1100;
const precioMonitor3 = 900;

const precioBoard1 = 20000;
const precioBoard2 = 18000;
const precioBoard3 = 12000;

const precioMemoria1 = 5000;
const precioMemoria2 = 3000;
const precioMemoria3 = 1000;

const precioDiscoDuro1 = 900;
const precioDiscoDuro2 = 700;
const precioDiscoDuro3= 200;


var preciosTotales = 0;

const productos = []

let nombreUsuario = prompt("Ingresa tu nombre ");
alert("hola " + nombreUsuario);
alert("Bienvendio a nuestra tienda virtual de accesorios para tu pc");

let continuar = true;
while (continuar) {
  let nombreProducto = prompt(
    "QUE PRODUCTO DE NUESTRO PORTAFOLIO DESEAS LLEVAR: procesador, monitor, board, memoria, disco duro"
  );

  switch (nombreProducto) {
    case "procesador":
      claseProcesador()  
      continuar = confirm("¿quieres agregar más productos a tu compra?");

      break;

    case "monitor":
        claseMonitor();
      continuar = confirm("¿quieres agregar más productos a tu compra?");

      break;

      case "board":
        claseBoard();
      continuar = confirm("¿quieres agregar más productos a tu compra?");
   
      break;

      case "memoria":
        claseMemoria();
      continuar = confirm("¿quieres agregar más productos a tu compra?");

      break;

      case "disco duro":
        calseDiscoDuro();
      continuar = confirm("¿quieres agregar más productos a tu compra?");

    default:
      alert("producto no disponible");
      break;
  }
  if (continuar != true) {
    alert("gracias por tu compra");
    console.log(productos)
    /*
    alert("precio total de tu compra es de $"+ precioTotalCompra)
    */
   

  }
}
 /* var precioTotalCompra = precioTotalProcesador + precioTotalMonitor + precioTotalBoard
 */



function claseProcesador(){
  let tipoProcesador = prompt("escoja una letra según la referencia que desea:  a)INTEL CORE i9    b)INTEL CORE i7    c)INTEL CORE i3")
    switch (tipoProcesador) {
      case "a":
          let cantidadCori9 = parseInt(prompt("ingresa la cantidad"));
          const precioProductoMasCantidad1 = (fn) =>{
            const precioTotalProcesador = precioProcesador1 * cantidadCori9          
            alert("el precio total de este producto es de $" + precioTotalProcesador);               
          }
          precioProductoMasCantidad1()
          productos.push(procesador1)
          console.log(procesador1)            
  
        break;
  
        case "b":
          let cantidadCori7 = parseInt(prompt("ingresa la cantidad"));
          const precioProductoMasCantidad2 = (fn) =>{
            const precioTotalProcesador = precioProcesador2 * cantidadCori7          
            alert("el precio total de este producto es de $" + precioTotalProcesador);               
          }
          precioProductoMasCantidad2()
          productos.push(procesador2)
          console.log(procesador2)              
  
        break;
  
        case "c":
          let cantidadCori3 = parseInt(prompt("ingresa la cantidad"));
          const precioProductoMasCantidad3 = (fn) =>{
            const precioTotalProcesador = precioProcesador3 * cantidadCori3          
            alert("el precio total de este producto es de $" + precioTotalProcesador);               
          }
          precioProductoMasCantidad3()
          productos.push(procesador3)
          console.log(procesador3)                
  
        break;
  
  }
  }

  function claseMonitor(){
    let tipoMonitor = prompt("escoja una letra según la referencia que desea:  a)SAMSWUNG   b)LG    c)SONY")
      switch (tipoMonitor) {
        case "a":
            let cantidadSamwung = parseInt(prompt("ingresa la cantidad"));
            const precioProductoMasCantidad1 = (fn) =>{
              const precioTotalMonitor = precioMonitor1 * cantidadSamwung           
              alert("el precio total de este producto es de $" + precioTotalMonitor);               
            }
            precioProductoMasCantidad1()
            productos.push(monitor1)
            console.log(monitor1)            
    
          break;
    
          case "b":
            let cantidadLg = parseInt(prompt("ingresa la cantidad"));
            const precioProductoMasCantidad2 = (fn) =>{
              const precioTotalMonitor = precioMonitor2 * cantidadLg           
              alert("el precio total de este producto es de $" + precioTotalMonitor);               
            }
            precioProductoMasCantidad2()
            productos.push(monitor2)
            console.log(monitor2)              
    
          break;
    
          case "c":
            let cantidadSony = parseInt(prompt("ingresa la cantidad"));
            const precioProductoMasCantidad3 = (fn) =>{
              const precioTotalMonitor = precioMonitor3 * cantidadSony          
              alert("el precio total de este producto es de $" + precioTotalMonitor);               
            }
            precioProductoMasCantidad3()
            productos.push(monitor3)
            console.log(monitor3)                
    
          break;
    
    }
    }
  
    function claseBoard(){
      let tipoBoard = prompt("escoja una letra según la referencia que desea:  a)NVTEK 16G   b)ORSERI 12G   c)SILICON 10G")
        switch (tipoBoard) {
          case "a":
              let cantidadRog = parseInt(prompt("ingresa la cantidad"));
              const precioProductoMasCantidad1 = (fn) =>{
                const precioTotalBoard = precioBoard1 * cantidadRog          
                alert("el precio total de este producto es de $" + precioTotalBoard);               
              }
              precioProductoMasCantidad1()
              productos.push(board1)
              console.log(board1)            
      
            break;
      
            case "b":
              let cantidadIntel = parseInt(prompt("ingresa la cantidad"));
              const precioProductoMasCantidad2 = (fn) =>{
                const precioTotalBoard = precioBoard2 * cantidadIntel          
                alert("el precio total de este producto es de $" + precioTotalBoard);               
              }
              precioProductoMasCantidad2()
              productos.push(board2)
              console.log(board2)              
      
            break;
      
            case "c":
              let cantidadAmd = parseInt(prompt("ingresa la cantidad"));
              const precioProductoMasCantidad3 = (fn) =>{
                const precioTotalBoard = precioBoard3 * cantidadAmd          
                alert("el precio total de este producto es de $" + precioTotalBoard);               
              }
              precioProductoMasCantidad3()
              productos.push(board3)
              console.log(board3)                
      
            break;      
      }
      }
      function claseMemoria(){
        let tipoMemoria = prompt("escoja una letra según la referencia que desea:  a)ASUS ROG   b)ASUS INTEL   c)ASUS AMD")
          switch (tipoMemoria) {
            case "a":
                let cantidadNVTEK = parseInt(prompt("ingresa la cantidad"));
                const precioProductoMasCantidad1 = (fn) =>{
                  const precioTotalMemoria = precioMemoria1 * cantidadNVTEK         
                  alert("el precio total de este producto es de $" + precioTotalMemoria);               
                }
                precioProductoMasCantidad1()
                productos.push(memoria1)
                console.log(memoria1)            
        
              break;
        
              case "b":
                let cantidadCorseri = parseInt(prompt("ingresa la cantidad"));
                const precioProductoMasCantidad2 = (fn) =>{
                  const precioTotalMemoria = precioMemoria2 * cantidadCorseri          
                  alert("el precio total de este producto es de $" + precioTotalMemoria);               
                }
                precioProductoMasCantidad2()
                productos.push(memoria2)
                console.log(memoria2)              
        
              break;
        
              case "c":
                let cantidadSilicon = parseInt(prompt("ingresa la cantidad"));
                const precioProductoMasCantidad3 = (fn) =>{
                  const precioTotalMemoria = precioMemoria3 * cantidadSilicon          
                  alert("el precio total de este producto es de $" + precioTotalMemoria);               
                }
                precioProductoMasCantidad3()
                productos.push(memoria3)
                console.log(memoria3)                
        
              break;      
        }
        }
        
        function calseDiscoDuro(){
          let tipoDiscoDuro = prompt("escoja una letra según la referencia que desea:  a)SAMSUNG   b)TOSHIBA   c)SATA")
            switch (tipoDiscoDuro) {
              case "a":
                  let cantidadSamwsung = parseInt(prompt("ingresa la cantidad"));
                  const precioProductoMasCantidad1 = (fn) =>{
                    const precioTotalDiscoDuro = precioDiscoDuro1 * cantidadSamwsung         
                    alert("el precio total de este producto es de $" + precioTotalDiscoDuro);               
                  }
                  precioProductoMasCantidad1()
                  productos.push(discoDuro1)
                  console.log(discoDuro1)            
          
                break;
          
                case "b":
                  let cantidadToshiba = parseInt(prompt("ingresa la cantidad"));
                  const precioProductoMasCantidad2 = (fn) =>{
                    const precioTotalDiscoDuro = precioDiscoDuro2 * cantidadToshiba           
                    alert("el precio total de este producto es de $" + precioTotalDiscoDuro);               
                  }
                  precioProductoMasCantidad2()
                  productos.push(discoDuro2)
                  console.log(discoDuro2)              
          
                break;
          
                case "c":
                  let cantidadSata = parseInt(prompt("ingresa la cantidad"));
                  const precioProductoMasCantidad3 = (fn) =>{
                    const precioTotalDiscoDuro = precioDiscoDuro3 * cantidadSata          
                    alert("el precio total de este producto es de $" + precioTotalDiscoDuro);               
                  }
                  precioProductoMasCantidad3()
                  productos.push(discoDuro3)
                  console.log(discoDuro3)                
          
                break;      
          }
          }
          
          continuar = confirm("¿quiere eliminar un producto?")
while (continuar){
  const productoAeliminar = prompt(
    "que producto quieres eliminar"
    );  

  switch (productoAeliminar) {
    case "procesador":
      const index = productos.findIndex((producto)=> producto.nombre = productoAeliminar)
      if(index != -1){
        productos.splice(index,1)
        alert("producto eliminado")
      }else{
        alert("no se puedo eliminar")
      }
      continuar = confirm("quiere continuar")            
          

    break;

      case "monitor":
        const index2 = productos.findIndex((producto)=> producto.nombre = productoAeliminar)
        if(index2 != -1){
          productos.splice(index2,1)
          alert("producto eliminado")
        }else{
          alert("no se puedo eliminar por que el prodcto no existe")
        }
        continuar = confirm("quiere continuar")

        break;
                    
    case "board":
        const index3 = productos.findIndex((producto)=> producto.nombre = productoAeliminar)
        if(index3 != -1){
          productos.splice(index3,1)
          alert("producto eliminado")
        }else{
          alert("no se puedo eliminar por que el prodcto no existe")
        }
        continuar = confirm("quiere continuar") 
        
        break;
      
         case "monmemoria ":
        const index4 = productos.findIndex((producto)=> producto.nombre = productoAeliminar)
        if(index4 != -1){
          productos.splice(index4,1)
          alert("producto eliminado")
        }else{
          alert("no se puedo eliminar por que el prodcto no existe")
        }
        continuar = confirm("quiere continuar")

        break;


        case "disco duro":
          const index5 = productos.findIndex((producto)=> producto.nombre = productoAeliminar)
          if(index5 != -1){
            productos.splice(index5,1)
            alert("producto eliminado")
          }else{
            alert("no se puedo eliminar por que el prodcto no existe")
          }
          continuar = confirm("quiere continuar")

          break;
        

}
if (continuar != true) {
  alert("gracias por tu compra");
  console.log(productos)
}
}
