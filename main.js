const URL_API = "https://api.tvmaze.com/shows/";
let paginaActual = 0;

async function cargarSeries(){
    try{
        const contenedorSerie = document.getElementById("series");
        contenedorSerie.innerHTML = "";

        const idInicio = paginaActual * 6 + 1;
        const idFin = idInicio + 5;

        for(let i=idInicio; i <= idFin; i++){
            const respuesta = await fetch(URL_API + i);

            if (respuesta.status !== 200) {
                throw new Error("No se pudieron obtener las series");
            }

            const serie = await respuesta.json();

            const nuevaSerie = new Serie(
                serie.id,
                serie.url,
                serie.name,
                serie.language,
                serie.genres,
                serie.image ? serie.image.medium : ""
            );

            const nuevoElemento = nuevaSerie.createHtmlElement();
            contenedorSerie.appendChild(nuevoElemento);
        }
    }catch(error){
        alert("No se pudo cargar la lista de series");
        console.error(error);
    }
}

function paginaSiguiente(){
    paginaActual ++;
    cargarSeries();
}

function paginaAnterior(){
    if(paginaActual > 0){
        paginaActual --;
        cargarSeries();
    }
    else{
        alert("No hay más series para mostrar.");
    }
}

const botonSiguiente = document.getElementById("siguiente");
botonSiguiente.addEventListener("click", paginaSiguiente);

const botonAnterior = document.getElementById("anterior");
botonAnterior.addEventListener("click", paginaAnterior);

cargarSeries();