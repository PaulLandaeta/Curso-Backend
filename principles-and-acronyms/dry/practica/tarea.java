// Colocar la información escencial que todo producto comprable debería de tener

// Esto permitira que las clases hijas agreguen sus propios atributos, sin tener que agregar
// nuevamente metodos o atributos que ya deberian existir en el producto
class SellThing {
  private String code;

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  private int stock = 10;

  public int getStock() {
    return stock;
  }

  public void setStock(int stock) {
    this.stock = stock;
  }

  private int price;

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  private String empresa;

  public String getEmpresa() {
    return empresa;
  }

  public void setEmpresa(String empresa) {
    this.empresa = empresa;
  }

  public SellThing(String code, int stock, int price, String name, String empresa) {
    this.code = code;
    this.stock = stock;
    this.price = price;
    this.name = name;
    this.empresa = empresa;
  }

  public void sellObject(int quantity, String object) {
    if (stock >= quantity) {
      stock -= quantity;
      System.out.println(object + " vendido. Stock actualizado: " + stock);
    } else {
      System.out.println("Stock insuficiente para comprar " + object + "s.");
    }
  }

  // imprimir la informacion del producto esperado
  public void showInfo() {
    System.out.println("\n<><><><>PRODUCTO<><><><>");
    System.out.println("Nombre: " + this.getName());
    System.out.println("Precio: " + this.getPrice());
    System.out.println("Codigo: " + this.getCode());
    System.out.println("Estado: " + (this.getStock() > 0 ? "DISPONIBLE" : "AGOTADO"));
    System.out.println("Proveedor: " + this.getEmpresa());
    System.out.println("Cantidad en inventario: " + this.getStock());
  }
}

class Book extends SellThing {
  private String autor;

  public String getAutor() {
    return autor;
  }

  public void setAutor(String autor) {
    this.autor = autor;
  }

  public Book(String code, int stock, int price, String name, String empresa, String autor) {
    super(code, stock, price, name, empresa);
    this.autor = autor;
  }

  // imprimiendo la informacion que deberia tener el producto por defecto, junto
  // con su informacion propia
  @Override
  public void showInfo() {
    super.showInfo();
    System.out.println("Autor: " + this.getAutor());
  }
}

class Game extends SellThing {

  public Game(String code, int stock, int price, String name, String empresa, String Franquicia) {
    super(code, stock, price, name, empresa);
    this.Franquicia = Franquicia;
  }

  private String Franquicia;

  public String getFranquicia() {
    return Franquicia;
  }

  public void setFranquicia(String Franquicia) {
    this.Franquicia = Franquicia;
  }

  // imprimiendo la informacion que deberia tener el producto por defecto, junto
  // con su informacion propia
  @Override
  public void showInfo() {
    super.showInfo();
    System.out.println("Franquicia: " + this.getFranquicia());
  }
}

class Computer extends SellThing {

  private String Modelo;

  public Computer(String code, int stock, int price, String name, String empresa, String Modelo) {
    super(code, stock, price, name, empresa);
    this.Modelo = Modelo;
  }

  public String getModelo() {
    return Modelo;
  }

  public void setModelo(String Modelo) {
    this.Modelo = Modelo;
  }

  // imprimiendo la informacion que deberia tener el producto por defecto, junto
  // con su informacion propia
  @Override
  public void showInfo() {
    super.showInfo();
    System.out.println("Modelo: " + this.getModelo());
  }
}

class Main {
  public static void main(String[] args) {
    Book book = new Book("B001", 5, 20, "El Gran Gatsby", "Editorial XYZ", "F. Scott Fitzgerald");
    Game game = new Game("G001", 8, 50, "The Legend of Zelda", "Nintendo", "The Legend of Zelda Series");
    Computer computer = new Computer("C001", 10, 1000, "Laptop HP", "HP Inc.", "HP Pavilion X360");

    book.showInfo();
    game.showInfo();
    computer.showInfo();

    book.sellObject(2, "libro");

    game.sellObject(3, "videojuego");

    computer.sellObject(1, "computadora");

    book.showInfo();
    game.showInfo();
    computer.showInfo();
  }
}
