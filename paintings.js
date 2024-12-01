/*Manejo de una lista de pinturas famosas utilizando la clase Painting, que hereda
de un objeto instanciado de la clase Showable*/

let Showable = function() {
    this.show = function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') console.log(`${key}: ${this[key]}`)
        }
    }
}

let showablePainting = new Showable()

let Painting = function(name, artist, year) {
    this.name = name;
    this.artist = artist;
    this.year = year;
};

Painting.prototype = showablePainting

let MonaLisa = new Painting("Mona Lisa", "Leonardo da Vinci", 1503);
let TheLastSupper = new Painting("The Last Supper", "Leonardo da Vinci", 1495);
let StarryNight = new Painting("Starry Night", "Vincent van Gogh", 1889);
let TheScream = new Painting("The Scream", "Edvard Munch", 1893);
let Guernica = new Painting("Guernica", "Pablo Picasso", 1937);
let TheKiss = new Painting("The Kiss", "Gustav Klimt", 1907);
let GirlWithAPearlEarring = new Painting("Girl With a Pearl Earring", "Johannes Vermeer", 1665);
let TheBirthOfVenus = new Painting("The Birth of Venus", "Sandro Botticelli", 1485);
let LasMeninas = new Painting("Las Meninas", "Diego Velázquez", 1656);
let TheCreationOfAdam = new Painting("The Creation of Adam", "Michelangelo", 1512);

let paintings = {
    list: [
        MonaLisa,
        TheLastSupper,
        StarryNight,
        TheScream,
        Guernica,
        TheKiss,
        GirlWithAPearlEarring,
        TheBirthOfVenus,
        LasMeninas,
        TheCreationOfAdam
    ],
    contains: function (_name) {
        return this.list.some(painting => painting.name === _name);
    },
    add: function (_name, _artist, _year) {
        this.list.push(new Painting(_name, _artist, _year));
    },
    show: function () {
        for (let painting of this.list) {
            console.log('---------------------------------');
            for (let key in painting) {
                console.log(`${key}: ${painting[key]}`);
            }
            console.log(' ');
        }
    },
    clear: function () {
        this.list.length = 0;
    },
    edit: function (_name, _artist, _year) {
        let indexPainting = this.list.findIndex(painting => painting.name === _name)
        if (indexPainting === -1){
            console.log("Pintura no encontrada")
            return
        } else {
            this.list[indexPainting].artist = _artist
            this.list[indexPainting].year = _year
        }
    },
    delete: function(_name) {
        let indexPainting = this.list.findIndex(painting => painting.name === _name)
        if (indexPainting === -1){
            console.log("Pintura no encontrada")
            return
        } else {
            this.list.splice(indexPainting, 1)
            return
        }
    }
};
