interface Teleferico{
    void iniciarRecorrido();
    void detenerEstacion();
    void finalizarRecorrido();
}

class LineaRoja implements Teleferico{
    public void iniciarRecorrido(){
        System.out.println("Inicia Recorrido linea Roja");
    }
    public void detenerEstacion(){
     System.out.println("Detiene estacion 1 linea Roja");   
    }
    public void finalizarRecorrido(){
        System.out.println("Finaliza Recorrido linea Roja");
    }
}

/*class LineaDorada implements Teleferico{
    public void iniciarRecorrido(){
        System.out.println("Inicia Recorrido linea Dorada");
    }
    public void detenerEstacion(){
     System.out.println("Detiene estacion 1 junto linea Roja");   
    }
    public void finalizarRecorrido(){
        System.out.println("Finaliza Recorrido linea Dorada");
    }
}*/

public class tarea02 {
	public static void main(String [] args) {
        LineaRoja lr=new LineaRoja();
        lr.iniciarRecorrido();
        lr.detenerEstacion();
        lr.finalizarRecorrido();
        /*LineaDorada ld=new LineaDorada();
        ld.iniciarRecorrido();
        ld.detenerEstacion();
        ld.finalizarRecorrido();*/

	}
}