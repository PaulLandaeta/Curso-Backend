interface MovieProjector {
  void startProjection();
  void stopProjection();
  void checkProjectorStatus();
}

interface TicketSeller {
  void sellTicket();
  void refundTicket();
  void checkTicketAvailability();
}

interface ConcessionStandWorker {
  void serveSnack();
  void restockItems();
  void processPayment();
}

class MovieProjectorOperator implements MovieProjector {
  @Override
  public void startProjection() {
    System.out.println("Iniciando Proyeccion!");
  }

  @Override
  public void stopProjection() {
    System.out.println("Parando Proyeccion!");
  }

  @Override
  public void checkProjectorStatus() {
    System.out.println("Chequeando el estado del proyector!");
  }
}

class TicketSellerOperator implements TicketSeller {
  @Override
  public void sellTicket() {
    System.out.println("Vender ticket!");
  }

  @Override
  public void refundTicket() {
    System.out.println("Devolver ticket!");
  }

  @Override
  public void checkTicketAvailability() {
    System.out.println("Verificar si existen tickets disponibles!");
  }
}

class ConcessionStandWorkerOperator implements ConcessionStandWorker {
  @Override
  public void serveSnack() {
    System.out.println("Servir refrigerio!");
  }

  @Override
  public void restockItems() {
    System.out.println("Reabastecer items!");
  }

  @Override
  public void processPayment() {
    System.out.println("Procesar pago!");
  }
}
