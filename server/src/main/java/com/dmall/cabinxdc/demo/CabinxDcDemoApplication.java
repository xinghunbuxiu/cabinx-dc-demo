package com.dmall.cabinxdc.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication(scanBasePackages = "com.dmall")
@ImportResource(locations = {"classpath:spring-*.xml"})
public class CabinxDcDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(CabinxDcDemoApplication.class, args);
    }

}
