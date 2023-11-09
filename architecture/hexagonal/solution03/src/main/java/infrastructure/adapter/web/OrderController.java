package main.java.infrastructure.adapter.web;

import main.java.application.model.Order;
import main.java.application.ports.in.OrderService;

//@RestController
//@RequestMapping("/orders")
//@RequestMapping("/books")
//@RequestMapping("/interfaces")


public class OrderController {
    
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

   // @PostMapping
    public ResponseEntity<Void> createOrder(@RequestBody Order order) {
        orderService.createOrder(order);
        return ResponseEntity.ok().build();
    }

   // @GetMapping
    public ResponseEntity<List<Order>> listOrders() {
        return ResponseEntity.ok(orderService.listOrders());
    }
}
