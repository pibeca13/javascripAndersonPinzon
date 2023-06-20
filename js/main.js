const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

const verProducto = ({id,nombre,precio,descripcion,stock,imagen}) =>{
       const contendorProductos = document.querySelector("#contendorProductos")
       const tarjeta = document.createElement("div")
       tarjeta.className = "tarjeta"
       tarjeta.innerHTML = `
                           <img src="${imagen}">
                           <div class="contenido">
                           <h3>${nombre}</h3>
                           <p>${descripcion}</p>                                                             
                           <span><b>Precio:</b> ${precio} </span>
                           </div>                           
                           <form id="crearItem${id}" class=formulario>
                           <input name="id" type="hidden" value="${id}">
                           <input name="cantidad" type="number" value="1" min="1" max="${stock}">                           
                           <button type="submit">agregar al carrito</button>
                           </form>                                
      `

      contendorProductos.append(tarjeta)
}

const agregarCarrito = (id) =>{
     const crearItem = document.querySelector("#crearItem" + id)
     crearItem.addEventListener("submit",(e)=>{
            e.preventDefault()
            const cantidad = e.target.children["cantidad"].value
            carrito.push({
                id,
                cantidad    
            }) 
            localStorage.setItem("carrito",JSON.stringify(carrito))

            Swal.fire({
              icon: 'success',
              title: 'Producto agregado',
              showConfirmButton: false,
              timer: 1500,  
              color:"white",
              background: "rgb(17, 17, 17)"            
            })    
     })

}
const verProductos = async () =>{
  const res = await fetch("./productos.json")
  const productos = await res.json()
  console.log(productos)  
      productos.forEach(producto =>{
            verProducto(producto)
            agregarCarrito(producto.id)
      })
}

verProductos()