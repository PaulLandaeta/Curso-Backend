package main.java.application.ports.out;

import java.util.List;

import main.java.application.model.Order;

public interface InventoryRepository {
    public void save(Order order);
    public List<Order> findAll();
}
