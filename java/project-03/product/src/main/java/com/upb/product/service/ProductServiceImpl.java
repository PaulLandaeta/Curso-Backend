package com.upb.product.service;

import com.upb.product.entity.Product;
import com.upb.product.exception.ProductServiceCustomExpection;
import com.upb.product.model.ProductRequest;
import com.upb.product.model.ProductResponse;
import com.upb.product.repository.ProductRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;
    @Override
    public long addProduct(ProductRequest productRequest) {
        log.info("Product Service: Creating Product with id" + productRequest.getName());
        Product product = Product.builder()
                .productName(productRequest.getName())
                .quantity(productRequest.getQuantity())
                .price(productRequest.getPrice())
                .build();

        productRepository.save(product);
        log.info("Product Created");
        return product.getProductId();
    }

    @Override
    public ProductResponse getProductById(long productId) {
        log.info("Getting Product by Id");
        Product product = productRepository.findById(productId)
                .orElseThrow(
                        () -> new ProductServiceCustomExpection("Product Error No seas Gil no existe ese Error", "404")
                );

        ProductResponse productResponse = new ProductResponse();
        BeanUtils.copyProperties(product, productResponse);

        return productResponse;
    }

    @Override
    public void discountQuantity(long productId, long quantity) {
        log.info("Product Service - DiscountQuantity: Updating Product with id: " + productId);
        Product product = productRepository
                .findById(productId)
                .orElseThrow(
                        () -> new ProductServiceCustomExpection("Product Error No seas Gil no existe ese Error", "404")
                );
        if(product.getQuantity()<quantity){
            throw new ProductServiceCustomExpection("No existe esa cantidad", "400");
        }

        product.setQuantity(product.getQuantity()-quantity);
        productRepository.save(product);
    }
}
