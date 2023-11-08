class Pokeball {
  public boolean catchPokemon(Pokemon pokemon, Double probabilidad) {
    System.out.println("SI Fue atrapado el pokemon " + pokemon.getName() + "!");
    return true;
  }


class GreatBall extends Pokeball {
  @Override
  public boolean catchPokemon(Pokemon pokemon, Double probabilidad) {
    if (pokemon.getEscapeProbability() < probabilidad) {
      System.out.println(pokemon.getName() + " fue atrapado con una GreatBall!");
    } else {
      System.out.println(pokemon.getName() + " escapó de la GreatBall.");
    }
    return pokemon.getEscapeProbability() < probabilidad;
  }
}

class UltraBall extends Pokeball {
  @Override
  public boolean catchPokemon(Pokemon pokemon, Double probabilidad) {
    if (pokemon.getEscapeProbability() < probabilidad) {
        System.out.println(pokemon.getName() + " fue atrapado con una UltraBall!");
    } else {
        System.out.println(pokemon.getName() + " escapó de la UltraBall.");
    }
    return pokemon.getEscapeProbability() < probabilidad;
  }
}
