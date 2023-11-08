package main.java.application.ports.in;
import main.java.application.model.Order;
import java.util.List;


public interface InventoryService {
    void createOrder(Order order);
    List<Order> listOrders();
}