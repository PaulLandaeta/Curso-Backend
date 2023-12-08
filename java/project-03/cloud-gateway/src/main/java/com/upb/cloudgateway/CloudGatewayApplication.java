package com.upb.cloudgateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;
import org.springframework.context.annotation.Bean;
import reactor.core.publisher.Mono;

@SpringBootApplication
public class CloudGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudGatewayApplication.class, args);
	}
	@Bean
	KeyResolver userKeySolver(){
		// return exchange -> Mono.just("userKey");
		return exchange -> Mono.just(exchange.getRequest().getRemoteAddress().getHostName());
	}

	@Bean
	public RedisRateLimiter rateLimiter() {
		return new RedisRateLimiter(3, 3);
		// replenishRate, burstCapacity, intervalo en segundos
	}
}
