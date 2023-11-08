class Pokeball {
    public void catchPokemon(Pokemon pokemon) {
        System.out.println("Intentas atrapar a " + pokemon.getName());
        // Implementación básica para atrapar Pokémon
    }
}

class GreatBall extends Pokeball {
    @Override
    public void catchPokemon(Pokemon pokemon) {
        if (pokemon.getEscapeProbability() < 0.5) {
            System.out.println(pokemon.getName() + " fue atrapado con una GreatBall!");
        } else {
            System.out.println(pokemon.getName() + " escapó de la GreatBall.");
        }
    }
}

class UltraBall extends Pokeball {
    @Override
    public void catchPokemon(Pokemon pokemon) {
        if (pokemon.getEscapeProbability() < 0.2) {
            System.out.println(pokemon.getName() + " fue atrapado con una UltraBall!");
        } else {
            System.out.println(pokemon.getName() + " escapó de la UltraBall.");
        }
    }
}