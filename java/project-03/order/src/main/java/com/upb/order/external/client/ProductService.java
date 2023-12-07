package com.upb.order.external.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "PRODUCT-SERVICE/product") // localhost:8080/product
public interface ProductService {
    @PutMapping("/{id}/{quantity}") // localhost:8080/id/quantity PUT
    public void discountQuantity(@PathVariable("id") long productId,
                                 @PathVariable long quantity);

}
