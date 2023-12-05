package com.upb.order.model;

import lombok.Data;

@Data
public class OrderRequest {
    private Long productId;
    private Long quantity;
    private Double Price;
}
