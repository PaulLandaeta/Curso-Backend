package com.upb.order.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="ORDER_PRODUCT")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name="QUANTITY")
    private Long quantity;

    @Column(name="PRODUCT_ID")
    private Long productId;
    @Column(name="PRICE")
    private Double price;

}
