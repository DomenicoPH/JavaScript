// Getters & Setters

class Libro {
    constructor(autor) {
        this._autor = autor
    };

    // Getter:
    get autor() {
        return this._autor;
    };
    // Setter:
    set autor(nuevoAutor) {
        this._autor = nuevoAutor
    }
};

// get
const libro = new Libro('anónimo');
console.log(libro.autor);
// set
libro.autor = 'Pantuflo Debrisit';
console.log(libro.autor);

// full libro
console.log(libro);