package com.upb.product.service;

import com.upb.product.model.ProductRequest;
import com.upb.product.model.ProductResponse;

public interface ProductService {
    long addProduct(ProductRequest productRequest);

    ProductResponse getProductById(long productId);
}
