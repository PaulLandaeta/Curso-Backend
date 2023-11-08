//Implementacion con producto como super clase para darle el nombre del producto
//en la sub clase por medio del constructor, 
class Product {
    private String name;
    private int stock;

    public Product(String name, int stock) {
        this.name = name;
        this.stock = stock;
    }

    public void sell(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println(name + " vendido. Stock actualizado: " + stock);
        } else {
            System.out.println("Stock insuficiente para " + name + "s.");
        }
    }
}

class Book extends Product {
    public Book(int stock) {
        super("Libro", stock);
    }
}

class Game extends Product {
    public Game(int stock) {
        super("Juego", stock);
    }
}

public class tarea04 {
    public static void main(String[] args) {
        Book book=new Book(20);
        book.sell(2);
        Game game=new Game(10);
        game.sell(20);
    }
}
