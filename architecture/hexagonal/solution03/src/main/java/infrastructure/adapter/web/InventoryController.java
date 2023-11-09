package main.java.infrastructure.adapter.web;

import main.java.application.model.Inventory;
import main.java.application.model.Order;
import main.java.application.ports.in.InventoryService;

//@RestController
//@RequestMapping("/orders")
//@RequestMapping("/books")
//@RequestMapping("/interfaces")


public class InventoryController {
    
    private final InventoryService inventoryService;

    public OrderController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
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
