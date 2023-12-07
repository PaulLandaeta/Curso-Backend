package com.upb.paymentservice.service;

import com.upb.paymentservice.model.PaymentRequest;

public interface PaymentService {
    Long doPayment(PaymentRequest paymentRequest);
}
