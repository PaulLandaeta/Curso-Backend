interface PokemonAttack {
    void execute();
}

class Pikachu implements PokemonAttack {
    public void execute() {
        electricAttack();
    }

    private void electricAttack() {
        System.out.println("Pikachu usa Ataque Eléctrico!");
    }
}

class Charmander implements PokemonAttack {
    public void execute() {
        fireAttack();
    }

    private void fireAttack() {
        System.out.println("Charmander usa Ataque de Fuego!");
    }
}

class PokemonTrainer {
    private PokemonAttack attackStrategy;

    public PokemonTrainer(PokemonAttack attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    void commandToAttack() {
        attackStrategy.execute();
    }
}