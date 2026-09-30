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
            <img src="${this.image}" alt="${this.name}" class="serie-img"/>`;

        serieDiv.classList.add('serie');
        return serieDiv;
    }
}