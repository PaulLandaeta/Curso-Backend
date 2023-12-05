package com.upb.order.service;

import com.upb.order.model.OrderRequest;

public interface OrderService {

    void createOrder(OrderRequest orderRequest);
}
