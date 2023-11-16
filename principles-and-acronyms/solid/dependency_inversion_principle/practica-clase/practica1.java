interface PokemonAttack {
    void execute();
}

interface PokemonBasicAttack {
  void executeBasic();
}

interface PokemonHardAttack {
  void executeHard();
}

class Charmander implements PokemonBasicAttack, PokemonHardAttack {
  public void executeBasic() {
    ataqueBasico();
  }

  public void executeHard() {
    ataqueHard();
  }

  public void ataqueBasico(){
    System.out.println("Charmander usa Lanzallamas!");
  }

  public void ataqueHard(){
    System.out.println("Charmander usa Lanzallamas!");
  }
}

