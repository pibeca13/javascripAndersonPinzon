var puntaje = 0


function respuestas(){
    const resultado = 1 
    alert("CORRECTO")
puntaje = puntaje + resultado    
}    


  
alert("QUE TANTO SABES DE FUTBOL")
let nombreUsuario = prompt("ingresa tu nombre")
alert("hola " + nombreUsuario +" bienvenido a la trivia de futbol")
alert("escribe la respuesta de las siguientes preguntas, según la opción que creas pertinente")

alert("PREGUNTA 1 : ¿CUANTOS TITULOS LOCALES TIENE MILLONARIOS F.C DE COLOMBIA?")
let continuar = true;
while (continuar) {
    let primeraPregunta = prompt("a)12    b)15    c)13    d)9")

    if(primeraPregunta =="15"){                
            respuestas()            
        }else if(primeraPregunta !=="15"){
            alert("INCORRECTO la respuesta correcta es 15")
        }
        alert("PREGUNTA 2 : ¿EN QUE AÑO GANÓ ALEMANIA SU TERCER COPA DEL MUNDO?")

    let segundaPregunta = prompt("2014    1994    1990    2002")

    if(segundaPregunta =="1990"){
        var suma2 =10
            respuestas()            
        }else if(segundaPregunta !=="1990"){
        alert("INCORRETO la respuesta correcta es 1990")
        }
        alert("PREGUNTA 3 : ¿QUIES ES EL MÁXIMO GOLEADOR DE LOS MUNDIALES?")

    let terceraPregunta = prompt("ronaldo    Muller    pele    maradona")

    if(terceraPregunta =="Muller"){        
        respuestas()            
        }else if(terceraPregunta !=="Muller"){
        alert("INCORRECTO la respuesta correcta es Muller")
        }
    
        alert("PREGUNTA 4 : ¿CUANTAS BOTAS DE ORO TIENE DIEGO FORLAN?")
    let cuartaPregunta = prompt("a)2    b)1    c)4    d)0")

    if(cuartaPregunta =="2"){      
        respuestas()            
        }else if(cuartaPregunta !=="2"){
        alert("INCORRECTO la respuesta correcta es 2")
        }
    
        alert("PREGUNTA 5 : ¿QUÍEN ES EL MÁXIMO GOLEADOR DE LA SELECCION ARGENTINA?")
    let quintaPregunta = prompt("batistuta    messi    maradona    higuain")
    
    if(quintaPregunta =="messi"){       
        respuestas()            
        }else if(quintaPregunta !=="messi"){
        alert("INCORRECTO la respuesta correcta es messi")
        }
    
        alert("PREGUNTA 6 : ¿EN QUE AÑO GANO INGLATERRA SU ÚNICO MUNDIAL?")
    let sextaPregunta = prompt("1962    1970    1994    1966")

    if(sextaPregunta =="1966"){
       
        respuestas()            
        }else if(sextaPregunta !=="1966"){
        alert("INCORRECTO la respuesta correcta es 1996")
        }

        alert("PREGUNTA 7 : ¿CUAL ES EL JUGADOR QUE HA GANADO MAS CHAMPIONS LEAGUE?")
    let septimaPregunta = prompt("cristiano    messi    gento   zlattan")

    if(septimaPregunta =="gento"){
        
        respuestas()            
        }else if(septimaPregunta !=="gento"){
        alert("INCORRECTO la respuesta correcta es gento")
        }
        alert("obtuviste " +puntaje + " preguntas correctas")        
        break
}











