interface Catchable {
    void catchPokemon();
}

class Pikachu implements Catchable {
    public void catchPokemon() {
        System.out.println("Pikachu fue atrapado!");
    }
}

class Charmander implements Catchable {
    public void catchPokemon() {
        System.out.println("Charmander fue atrapado!");
    }
}

class Pokeball {
    private Catchable pokemon;

    public Pokeball(Catchable pokemon) {
        this.pokemon = pokemon;
    }

    public void catchAction() {
        pokemon.catchPokemon();
    }
}