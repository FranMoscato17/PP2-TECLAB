$( document ).ready(function() {

    //al cargar la pagina de inicio buscamos si viene algun parametro por url del buscador
    var resultado = obtenerParametroUrl('buscar')
    if(resultado  != ''){
        funcionDibujarBuscador(resultado)
    }
   // funcion encargada de buscar articulos
    $("#buscadorProductos").keypress((e) => {      
        let dataFiltrada = $("#buscadorProductos").val()
       // ejecutamos buscador con el boton enter
        if(e.keyCode === 13)
        {
            //contar cantidad de textos ingresados en el buscador
            if (dataFiltrada.length > 3) 
            {                    
                   funcionDibujarBuscador(dataFiltrada)
                    //una vez termina el recorrido de elementos encontrado hacemos que dibuje en la caja de busqueda
            }
            // con return false evitar el recargar la pagina
            return false; 
        }
    });
    //funcion encargada de 
    function obtenerParametroUrl(NombreParametro) {
        NombreParametro = NombreParametro.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + NombreParametro + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    function funcionDibujarBuscador(dataFiltrada){
         //creamos el html de la tarjeta del articulo se declara en vacio  
         let tarjetaHtml = ''
         $(`#resultadosEncontrados`).empty()//limpiamos el contenedor despues de cada busqueda
         $(".articulos").each((index)=>{
             let srcArticuosEncontrado = $($(".articulos")[index]).attr("src");
             let atributoColor = $($(".articulos")[index]).attr("data-color");
             //condicion de la busqueda para que solo busque lo filtrado
                 if (atributoColor == dataFiltrada ) 
                 {                             
                 // se concatena los resultados a la variable anterior  (tarjetaHtml)
                 tarjetaHtml=`<div class="col-4">
                         <div class="card mb-2" >
                             <img src="${srcArticuosEncontrado}" class="card-img-top" alt="">
                             <div class="card-body">
                             <p class="card-text text-center mb-2"> Jean de invierno unisex  </p>
                             </div>
                         </div>
                     </div> `;
                     $(`#resultadosEncontrados`).append(tarjetaHtml)
                 }
             })
              // abir la caja de busqueda resultadosBuscar
            $('#mylist a[href="#resultadosBuscar"]').tab('show')
    }
});