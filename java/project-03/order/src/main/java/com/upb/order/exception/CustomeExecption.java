package com.upb.order.exception;

import lombok.Data;

@Data
public class CustomeExecption extends RuntimeException{
    private String errorCode;
    private int status;
    public CustomeExecption(String message, String errorCode,int status){
        super(message);
        this.errorCode = errorCode;
        this.status = status;
    }
}
