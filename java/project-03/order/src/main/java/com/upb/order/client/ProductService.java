package com.upb.order.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@FeignClient(name = "PRODUCT-SERVICE/product") // localhost:8080/product
public interface ProductService {
    @PutMapping("/{id}/{quantity}")
    public void discountQuantity(@PathVariable("id") long productId,
                                 @PathVariable long quantity);
}
