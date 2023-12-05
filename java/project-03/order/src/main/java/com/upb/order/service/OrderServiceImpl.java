package com.upb.order.service;

import com.upb.order.client.ProductService;
import com.upb.order.entity.Order;
import com.upb.order.model.OrderRequest;
import com.upb.order.repository.OrderRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductService productService;

    @Override
    public void createOrder(OrderRequest orderRequest) {
        log.info("ORDER SERVICE - update product");
        productService.discountQuantity(orderRequest.getProductId(), orderRequest.getQuantity());
        log.info("ORDER SERVICE - createOrder: Creating Order");


        Order order = Order.builder()
                .productId(orderRequest.getProductId())
                .price(orderRequest.getPrice())
                .quantity(orderRequest.getQuantity())
                .build();
        orderRepository.save(order);
    }
}
