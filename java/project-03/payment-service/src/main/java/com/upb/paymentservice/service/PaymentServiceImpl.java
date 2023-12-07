package com.upb.paymentservice.service;

import com.upb.paymentservice.entity.TransactionDetails;
import com.upb.paymentservice.model.PaymentRequest;
import com.upb.paymentservice.repository.TransactionDetailsRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@Log4j2
public class  PaymentServiceImpl implements PaymentService{

    @Autowired
    private TransactionDetailsRepository transactionDetailsRepository;

    @Override
    public Long doPayment(PaymentRequest paymentRequest) {
        log.info("Recording Payment Details: {}" + paymentRequest);
        TransactionDetails transactionDetails =
                TransactionDetails.builder()
                        .paymentDate(Instant.now())
                        .paymentMode("Completed")
                        .paymentStatus("SUCCESS")
                        .orderId(paymentRequest.getOrderId())
                        .referenceNumber(paymentRequest.getReferenceNumber())
                        .amount(paymentRequest.getAmount())
                        .build();
       transactionDetailsRepository.save(transactionDetails);
       log.info("Transaction Completed");
        return transactionDetails.getId();

    }
}
