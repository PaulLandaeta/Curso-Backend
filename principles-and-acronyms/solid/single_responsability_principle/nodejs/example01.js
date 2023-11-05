// Definición de la clase Pokemon
class Pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    // Getters y setters
    getName() {
        return this.name;
    }
    
    getType() {
        return this.type;
    }
    
    setName(name) {
        this.name = name;
    }
    
    setType(type) {
        this.type = type;
    }
}

// Definición de las interfaces en JavaScript (no es necesario, pero puede ser útil para documentación)
class Attacker {
    attack() {}
}

class Healer {
    heal() {}
}

class Flyer {
    fly() {}
}

class Swimmer {
    swim() {}
}

// Definición de la clase Pikachu
class Pikachu extends Attacker {
    attack() {
        console.log("Pikachu usa Impactrueno!");
    }
}

class Lapras {
    constructor() {
        // Constructor de Lapras
    }

    swim() {
        console.log("Lapras nada tranquilamente!");
    }

    attack() {
        console.log("Lapras usa Hidrobomba!");
    }
}
// Definición de la clase Lapras
// Clase Lapras ahora implementa las interfaces
Object.assign(Lapras.prototype, Swimmer.prototype, Attacker.prototype);

// Uso de la clase Lapras
const lapras = new Lapras();
lapras.swim(); // Output: Lapras nada tranquilamente!
lapras.attack(); // Output: Lapras usa Hidrobomba!
