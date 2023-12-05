package com.upb.product.exception;

import lombok.Data;

@Data
public class ProductServiceCustomExpection extends RuntimeException{
    private String errorCode;
    public ProductServiceCustomExpection(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
}
