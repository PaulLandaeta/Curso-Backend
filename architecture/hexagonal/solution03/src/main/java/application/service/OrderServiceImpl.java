package main.java.application.service;

import java.util.List;

import main.java.application.model.Order;
import main.java.application.ports.in.OrderService;
import main.java.application.ports.out.OrderRepository;

public class OrderServiceImpl implements OrderService {
    
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public void createOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public List<Order> listOrders() {
        return orderRepository.findAll();
    }
}
