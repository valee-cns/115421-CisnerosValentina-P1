class Serie{
    constructor(id, url, name, language, generes, image){
        this.id = id;
        this.url = url;
        this.name = name;
        this.language = language;
        this.generes = generes;
        this.image = image;
    }

    toJsonString(){
        return JSON.stringify(this);
    }

    static createFromJsonString(json){
        const data = JSON.parse(json);
        return new Serie(data.id, data.url, data.name, data.language, data.generes, data.image);
    }

    createHtmlElement(){
        const serieDiv = document.createElement('div');
        serieDiv.innerHTML = `
            <p>Nombre: ${this.name}</p>
            <p>Lenguaje: ${this.language}</p>
            <p>Género: ${this.generes}</p>
            <a href="${this.url}" target="_blank">
            <img src="${this.image}" alt="${this.name}" class="serie-img"/>
            </a>
            <button class="guardar">Guardar</button>`;

        serieDiv.classList.add('serie');
        const botonGuardar = serieDiv.querySelector(".guardar");
        botonGuardar.addEventListener("click", () => {
            Serie.guardarSerie(this);
        });
        return serieDiv;
    }

    static guardarSerie(serie){
        let seriesGuardadas = JSON.parse(localStorage.getItem("seriesGuardadas"));

        if(seriesGuardadas === null){
            seriesGuardadas = [];
        }

        const repetidas = seriesGuardadas.some(seriesGuardadas => seriesGuardadas.id === serie.id);

        if(!repetidas){
            seriesGuardadas.push(serie);

            localStorage.setItem("seriesGuardadas", JSON.stringify(seriesGuardadas));
        }
    }
}
