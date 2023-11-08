interface PokemonAttack {
    void execute();
}

class ElectricAttack implements PokemonAttack {
    public void execute() {
        System.out.println("ultra electrico");
    }
}

class WaterAttack implements PokemonAttack {
    public void execute() {
        System.out.println("ultra bomba");
    }
}

class FireAttack implements PokemonAttack {
    public void execute() {
        System.out.println("ultra fuego");
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

    public void setAttackStrategy(PokemonAttack attackStrategy) {
        this.attackStrategy = attackStrategy;
    }
}

class Main {
    public static void main(String [] args) {
        PokemonAttack electrico = new ElectricAttack();
        PokemonAttack agua = new WaterAttack();

        PokemonTrainer trainer = new PokemonTrainer(electrico);
        trainer.commandToAttack();

        trainer.setAttackStrategy(agua);
        trainer.commandToAttack();
    }
}