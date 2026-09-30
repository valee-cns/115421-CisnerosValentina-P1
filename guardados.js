let seriesGuardadas = JSON.parse(localStorage.getItem("seriesGuardadas"));

if(seriesGuardadas === null){
    seriesGuardadas = [];
}

function mostrarSeries(){
    const contenedorSeries = document.getElementById("series");
    contenedorSeries.innerHTML = "";

    for(let i=0; i < seriesGuardadas.length; i++){
        const nuevaSerie = new Serie(
            seriesGuardadas[i].id,
            seriesGuardadas[i].url,
            seriesGuardadas[i].name,
            seriesGuardadas[i].language,
            seriesGuardadas[i].generes,
            seriesGuardadas[i].image
        );

        const nuevoElemento = nuevaSerie.createHtmlElement();
        contenedorSeries.appendChild(nuevoElemento);
    }
}

mostrarSeries();