package main.java.application.ports.out;

import java.util.List;

import main.java.application.model.Order;

public interface BookRepository {
    public void save(Order order);
    public List<Order> findAll();
}
