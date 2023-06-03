class Item {
  constructor(nombre,descripcion,precio,cantidad){
      this.nombre = nombre
      this.descripcion = descripcion
      this.precio = precio
      this.cantidad = cantidad        
      this.fechaCreacion = new Date()
  }
}


const productos = [
  {
      nombre:"PROCESADOR",
      precio:15000,       
      imagen:"https://i.ibb.co/QcFfZvV/Procesador-INTEL-CORE-i7-13500-K.jpg"
  },
  {
      nombre:"MONITOR",
      precio:1100,       
      imagen:"https://i.ibb.co/cQVX4kV/2.png"
  },
  {

      nombre:"TARJETA DE VIDEO",
      precio:1000,       
      imagen:"https://i.ibb.co/hF66QjX/tarjeta-de-video-msi-rtx-4080-16gb-gddr6-gaming-trio-x.jpg"
  },
  {
      nombre:"DIADEMA",
      precio:900,        
      imagen:"https://i.ibb.co/LR8pQjY/hpm1000-bk-1.jpg"
  } 

]

const contendorProductos = document.querySelector("#contendorProductos")
productos.forEach((producto)=>{
  const tarjetaProducto = document.createElement("div")
  tarjetaProducto.className = "tarjetaProducto"
  tarjetaProducto.innerHTML = `<img src="${producto.imagen}">
                               <h3>${producto.nombre}</h3>
                               <sapn>precio: ${producto.precio} $</sapn>                                                             
                               <form id="crearItem" class="fornulario">
          <textarea type="text" name="nombre" placeholder="ingrese producto" required></textarea>
          <textarea type="text" name="descripcion" placeholder="ingrese descirpcion " required></textarea>
          <input type="number" name="precio" placeholder="ingrese precio " required></input>
          <input type="number" name="cantidad" placeholder="ingrese cantidad" required></input>
          <button type="submit">crear item</button>
        </form>                                
                              `

  contendorProductos.append(tarjetaProducto)                            
})

const titulo = document.querySelector("#titulo")
const ingresotitulo = "Tienda informatica G.P"
titulo.innerHTML = ingresotitulo
ingresotitulo.className = "encabezado"


const items = JSON.parse(localStorage.getItem("itmes")) || [] 

const crearItem = document.querySelector("#crearItem")
crearItem.addEventListener("submit",(e)=>{
  e.preventDefault()
  const nombre = e.target.children["nombre"].value
  const descripcion = e.target.children["descripcion"].value
  const precio = e.target.children["precio"].value
  const cantidad = e.target.children["cantidad"].value
  const item = new Item(nombre,descripcion,precio,cantidad)
  items.push(item)
 localStorage.setItem("items",JSON.stringify(items) )
 console.log(items)
  crearItem.reset()  


})


