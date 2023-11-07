

class Pokemon {
    private String name;
    private String type;
    private int escapeProbability;
    // Constructor, getters y setters
    public String getName() {
        return name;
    }
    public int getEscapeProbability(){
        return escapeProbability;
    }
}
class Pokeball {
    public boolean catchPokemon(Pokemon pokemon) {
        System.out.println("Intentas atrapar a " + pokemon.getName());
        // Implementación básica para atrapar Pokémon
        return true;
    }
}

class GreatBall extends Pokeball {
    @Override
    public boolean catchPokemon(Pokemon pokemon) {
        if (pokemon.getEscapeProbability() < 0.5) {
            System.out.println(pokemon.getName() + " fue atrapado con una GreatBall!");
            return true;
        } else {
            System.out.println(pokemon.getName() + " escapó de la GreatBall.");
            return false;
        }
    }
}

class UltraBall extends Pokeball {
    @Override
    public boolean catchPokemon(Pokemon pokemon) {
        if (pokemon.getEscapeProbability() < 0.2) {
            System.out.println(pokemon.getName() + " fue atrapado con una UltraBall!");
            return true;
        } else {
            System.out.println(pokemon.getName() + " escapó de la UltraBall.");
            return false;
        }
    }

  


}
