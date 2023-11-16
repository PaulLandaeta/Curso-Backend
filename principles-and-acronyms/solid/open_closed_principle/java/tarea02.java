abstract interface Teleferico {
  public abstract void iniciarRecorrido();
  public abstract void detenerseEnEstaciones();
  public abstract void finalizarRecorrido();
}

class LineaRoja extends Teleferico {
  @Override
  public void iniciarRecorrido() {
    System.out.println("Iniciar recorrido linea roja!");
  }

  @Override
  public void detenerseEnEstaciones() {
    System.out.println("Detener recorrido linea roja!");
  }

  @Override
  public void finalizarRecorrido() {
    System.out.println("Finalizar recorrido linea roja!");
  }
}

class LineaAzul extends Teleferico {
  @Override
  public void iniciarRecorrido() {
    System.out.println("Iniciar recorrido linea azul!");
  }

  @Override
  public void detenerseEnEstaciones() {
    System.out.println("Detener recorrido linea azul!");
  }

  @Override
  public void finalizarRecorrido() {
    System.out.println("Finalizar recorrido linea azul!");
  }
}

public class Main {
  public static void main(String[] args) {
    Teleferico lineaRoja = new LineaRoja();
    Teleferico lineaAzul = new LineaAzul();

    lineaRoja.iniciarRecorrido();
    lineaAzul.iniciarRecorrido();

    Teleferico lineaDorada = new LineaDorada();
    lineaDorada.iniciarRecorrido();
  }
}
