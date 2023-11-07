
interface MovieProjector{
    void startProjection();
    void stopProjection();
    void checkProjectorStatus();
}

interface TickSeller{
    void sellTicket();
    void refundTicket();
    void checkTicketAvaility();
}

interface ConcessionStandWorker{
    void serveSnack();
    void restockItems();
    void processPayment();
}

class OperadorProyeccion implements MovieProjector{
    @Override
    public void startProjection() {
        System.out.println("Comienza la proyección");
    }

    @Override
    public void stopProjection() {
        System.out.println("Se detiene la proyección");
    }

    @Override
    public void checkProjectorStatus() {
        System.out.println("El proyector funciona!");   
    }
}

class VendedorBoletos implements TickSeller{

    @Override
    public void sellTicket() {
        System.out.println("Vendo Tickets"); 
   }

    @Override
    public void refundTicket() {
        System.out.println("Reembolso el Ticket"); 
   }

    @Override
    public void checkTicketAvaility() {
        System.out.println("Aún hay tickets!"); 
   }

}
class PersonalConsesion implements ConcessionStandWorker{

    @Override
    public void serveSnack() {
        System.out.println("Da snacks"); 
    }

    @Override
    public void restockItems() {
        System.out.println("Repone snacks"); 
    }

    @Override
    public void processPayment() {
        System.out.println("Procesa el pago"); 
    }

}

public class tarea01 {
	public static void main(String [] args) {
        PersonalConsesion pc=new PersonalConsesion();
        pc.serveSnack();
        VendedorBoletos vb=new VendedorBoletos();
        vb.sellTicket();
        OperadorProyeccion op=new OperadorProyeccion();
        op.startProjection();
	}
}
